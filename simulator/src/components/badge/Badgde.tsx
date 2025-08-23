import { tw } from '../../utils';
import { badgeStyles } from './BadgeStyles';

const variant = {
  APPROVED: 'approved',
  REFER: 'refer',
  DECLINE: 'decline',
} as const;

interface Props {
  status: string;
  variant?: (typeof variant)[keyof typeof variant];
}

export const Badge = ({ status, variant = 'approved' }: Props) => {
  return <p className={tw(badgeStyles({ variant }))}>{status}</p>;
};
