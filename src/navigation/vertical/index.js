const navigation = () => {
  return [
    {
      title: 'fastech',
      icon: 'mdi:home-outline',
      badgeContent: 'new',
      badgeColor: 'error',
      children: [
        // {
        //   title: 'CRM',
        //   path: '/dashboards/crm'
        // },
        // {
        //   title: 'Analytics',
        //   path: '/dashboards/analytics'
        // },
        // {
        //   title: 'eCommerce',
        //   path: '/dashboards/ecommerce'
        // }
      ]
    },
    {
      sectionTitle: 'Apps & Pages'
    },
    {
      title: 'Payment Manage',
      icon: 'mdi:file-document-outline',
      path: '/apps/invoice/list',
    },
    {
      title: 'Tweet manage',
      icon: 'mdi-twitter',
      path: '/apps/calendar',
    },
    {
      title: 'Create Tweet',
      icon: 'mdi-twitter',
      path: '/forms/form-elements/editor',
    },
    {
      title: 'User Base See ',
      icon: 'mdi:email-outline',
      path: '/apps/managetweet'
    },

    {
      title: 'Profile Manage ',
      icon: 'mdi:message-outline',
      path: '/apps/profile-manage'
    },
    {
      title: 'Create Packages',
      icon: 'mdi:account-cash-outline',
      path: '/apps/packages'



        }
      ]
    }

export default navigation
