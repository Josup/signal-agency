"""Signal AI Agency logo lockup — vector rebuild traced from the source artwork.

Geometry measured column-by-column off Downloads/signal_ai_agency_logo.jpg
(200x200). Six bars, three ink then three red, each a sheared parallelogram whose
top and bottom edges slope up to the right. Type is converted to paths so the SVG
renders identically everywhere with no font installed.

  ink #15110D   red #C41E3A   paper #F5F2ED

Outputs:
  signal-logo.svg              full lockup on Bone
  signal-logo-transparent.svg  full lockup, no background
  signal-logo-mark.svg         mark only
"""
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont

INK = "#15110D"
RED = "#C41E3A"
RED_RULE = "#D98A99"          # the pale rules flanking "Agency" in the source
PAPER = "#F5F2ED"

WORD_FONT = "fonts/ttf/Cormorant-500.ttf"      # high-contrast serif, matches source
SUB_FONT = "fonts/ttf/Lato-400.ttf"            # light letterspaced sans

# Measured column-by-column off the source, in its 200px coordinate space.
#   (x_left, x_right, y_top, y_bottom, colour)
# y grows downward. The three ink bars are trapezoids whose LEFT edge is inset
# (corners cut top-left and bottom-left); the three red bars mirror them, right
# edge inset. That mirroring is what gives the mark its diamond envelope.
SRC_BARS = [
    (75.0, 78.5, 79.0, 91.5, INK),
    (84.0, 88.5, 73.0, 97.0, INK),
    (94.0, 98.0, 63.0, 101.5, INK),
    (104.0, 108.0, 72.0, 100.0, RED),
    (113.0, 117.0, 80.0, 93.5, RED),
    (121.0, 125.0, 82.0, 91.5, RED),
]
CUT = 2.2          # corner cut, source px

SRC_X0, SRC_X1 = 75.0, 125.0
SRC_Y0, SRC_Y1 = 63.0, 101.5

W = H = 1600
CX = W / 2


class Text:
    """Lay a string out as SVG path data at a given size and tracking."""

    def __init__(self, font_path):
        self.font = TTFont(font_path)
        self.upem = self.font["head"].unitsPerEm
        self.glyphset = self.font.getGlyphSet()
        self.cmap = self.font.getBestCmap()
        self.hmtx = self.font["hmtx"]

    def measure(self, text, size, tracking=0.0):
        scale = size / self.upem
        w = sum(self.hmtx[gn][0] * scale + tracking
                for ch in text if (gn := self.cmap.get(ord(ch))))
        return w - tracking if text else 0.0

    def paths(self, text, size, tracking, x, baseline, fill):
        scale = size / self.upem
        out, pen_x = [], x
        for ch in text:
            gn = self.cmap.get(ord(ch))
            if gn is None:
                continue
            if ch != " ":
                pen = SVGPathPen(self.glyphset)
                self.glyphset[gn].draw(pen)
                if (d := pen.getCommands()):
                    out.append(
                        f'<path d="{d}" fill="{fill}" '
                        f'transform="translate({pen_x:.3f},{baseline:.3f}) '
                        f'scale({scale:.6f},{-scale:.6f})"/>')
            pen_x += self.hmtx[gn][0] * scale + tracking
        return out


def mark_polys(cx, top_y, width, fill_map=None):
    """Return <polygon> elements for the mark, scaled to `width` and anchored with
    its top edge at top_y, centred on cx."""
    src_w = SRC_X1 - SRC_X0
    s = width / src_w
    x_off = cx - width / 2 - SRC_X0 * s
    y_off = top_y - SRC_Y0 * s
    out = []
    for xl, xr, yt, yb, colour in SRC_BARS:
        c = (fill_map or {}).get(colour, colour)
        if colour == INK:      # left edge inset
            pts = [(xl, yt + CUT), (xr, yt), (xr, yb), (xl, yb - CUT)]
        else:                  # mirrored: right edge inset
            pts = [(xl, yt), (xr, yt + CUT), (xr, yb - CUT), (xl, yb)]
        p = " ".join(f"{x_off + px * s:.2f},{y_off + py * s:.2f}" for px, py in pts)
        out.append(f'<polygon points="{p}" fill="{c}"/>')
    return out


def mark_height(width):
    return (SRC_Y1 - SRC_Y0) * (width / (SRC_X1 - SRC_X0))


def build_svg(transparent=False, mark_only=False):
    word, sub = Text(WORD_FONT), Text(SUB_FONT)

    MARK_W = 392.0
    MARK_TOP = 330.0
    polys = mark_polys(CX, MARK_TOP, MARK_W)

    if mark_only:
        pad = 30
        h = mark_height(MARK_W)
        vb = (CX - MARK_W / 2 - pad, MARK_TOP - pad, MARK_W + 2 * pad, h + 2 * pad)
        return (f'<?xml version="1.0" encoding="UTF-8"?>\n'
                f'<svg xmlns="http://www.w3.org/2000/svg" '
                f'viewBox="{vb[0]:.1f} {vb[1]:.1f} {vb[2]:.1f} {vb[3]:.1f}" '
                f'width="{vb[2]:.0f}" height="{vb[3]:.0f}">\n'
                f'  <title>Signal AI Agency mark</title>\n  '
                + "\n  ".join(polys) + "\n</svg>\n")

    WORD, WSIZE, WTRACK = "SIGNAL AI", 200.0, 11.0
    ww = word.measure(WORD, WSIZE, WTRACK)
    word_baseline = 900.0
    word_paths = word.paths(WORD, WSIZE, WTRACK, CX - ww / 2, word_baseline, INK)

    SUB, SSIZE, STRACK = "Agency", 64.0, 13.0
    sw = sub.measure(SUB, SSIZE, STRACK)
    sub_baseline = 1000.0
    sub_paths = sub.paths(SUB, SSIZE, STRACK, CX - sw / 2, sub_baseline, INK)

    rule_y = sub_baseline - SSIZE * 0.24
    inner = sw / 2 + 40
    outer = ww / 2 - 14

    bg = "" if transparent else f'<rect width="{W}" height="{H}" fill="{PAPER}"/>'

    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
  <title>Signal AI Agency</title>
  {bg}
  <g id="mark">
    {chr(10).join("    " + p for p in polys)}
  </g>
  <g id="wordmark">
    {chr(10).join("    " + p for p in word_paths)}
  </g>
  <g id="rules" stroke="{RED_RULE}" stroke-width="5">
    <line x1="{CX - outer:.1f}" y1="{rule_y:.1f}" x2="{CX - inner:.1f}" y2="{rule_y:.1f}"/>
    <line x1="{CX + inner:.1f}" y1="{rule_y:.1f}" x2="{CX + outer:.1f}" y2="{rule_y:.1f}"/>
  </g>
  <g id="sub">
    {chr(10).join("    " + p for p in sub_paths)}
  </g>
</svg>
'''


def main():
    Path("signal-logo.svg").write_text(build_svg(), encoding="utf-8")
    Path("signal-logo-transparent.svg").write_text(build_svg(transparent=True), encoding="utf-8")
    Path("signal-logo-mark.svg").write_text(build_svg(mark_only=True), encoding="utf-8")
    print("wrote signal-logo.svg, signal-logo-transparent.svg, signal-logo-mark.svg")


if __name__ == "__main__":
    main()
