import type { Metadata } from 'next';
import AuditForm from './AuditForm';

export const metadata: Metadata = {
  title: 'AI Visibility Audit | Signal',
  description:
    'Find out if AI is recommending your competitors. Free 30-minute audit call.',
};

export default function AuditPage() {
  return <AuditForm />;
}
