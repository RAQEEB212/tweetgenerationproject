const navigation = () => {
  return [
    {
      title: 'TweetAutomtion',
      icon: 'mdi:home-outline',
      badgeContent: 'new',
      badgeColor: 'error',
      children: [
      ]
    },
    {
      title: 'Tweet Management',
      icon: 'mdi-twitter',
      path: '/apps/tweet-manage',
    },
    {
      title: 'User Management',
      icon: 'fa6-solid:users',
      path: '/apps/user-base-see'
    },
    {
      title: 'Payments',
      icon: 'mdi:payment-clock',
      path: '/apps/payment-manage',
    },
    {
      title: 'Subscriptions',
      icon: 'mdi:account-cash-outline',
      path: '/apps/create-packages'
    },
    {
      title: 'Profile',
      icon: 'iconamoon:profile-bold',
      path: '/apps/profile-manage'
    },
    {
      title: 'Logout',
      icon: 'memory:logout',
      path: '/logout'
    }
  ]
}

export default navigation
