// Type Imports
import type { CustomAvatarProps } from '@/components/@core/components/mui/Avatar';
import type { OptionsMenuType } from '@/components/@core/components/option-menu/types';
import type { ThemeColor } from '@/components/@core/types';

export type CardStatsVerticalProps = {
  title: string
  stats: string
  avatarIcon: string
  subtitle: string
  avatarColor?: ThemeColor
  trendNumber: string
  trend?: 'positive' | 'negative'
  avatarSkin?: CustomAvatarProps['skin']
  avatarSize?: number
  moreOptions?: OptionsMenuType
}
