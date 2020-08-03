// I feel like there are some DRY violations here
// but as long as I contain it to just this file,
// things should be ok...

export enum ProfilePrivacyOptions {
   everyone = 'everyone',
   friends_only = 'friends_only',
   just_me = 'just_me'
}

export const profile_privacy_options = {
   everyone: {
      id: 'everyone',
      label: 'Everyone',
      description: `Everyone can see your profile.`,
   },
   friends_only: {
      id: 'friends_only',
      label: 'Friends Only',
      description: `Only people who you accept as a friend can see your profile.`,
   },
   just_me: {
      id: 'just_me',
      label: 'Just Me',
      description: `Only you can see your profile.`,
   },
} as const

export const DEFAULT_PROFILE_VISIBILITY: (keyof typeof profile_privacy_options) = ProfilePrivacyOptions.everyone