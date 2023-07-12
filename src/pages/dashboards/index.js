// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import CardTwitter from "../../views/ui/cards/basic/CardTwitter";
import Twittercard from "../apps/user-base-see";
import DashBoardTwittercard from "./cardviewfordashboard";
import DashboardRightSideBar from "./dashboardrightsidebar";

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import CrmAward from 'src/views/dashboards/crm/CrmAward'
import CrmTable from 'src/views/dashboards/crm/CrmTable'
import CrmTotalGrowth from 'src/views/dashboards/crm/CrmTotalGrowth'
import CrmTotalProfit from 'src/views/dashboards/crm/CrmTotalProfit'
import CrmMonthlyBudget from 'src/views/dashboards/crm/CrmMonthlyBudget'
import CrmExternalLinks from 'src/views/dashboards/crm/CrmExternalLinks'
import CrmWeeklyOverview from 'src/views/dashboards/crm/CrmWeeklyOverview'
import CrmPaymentHistory from 'src/views/dashboards/crm/CrmPaymentHistory'
import CrmOrganicSessions from 'src/views/dashboards/crm/CrmOrganicSessions'
import CrmProjectTimeline from 'src/views/dashboards/crm/CrmProjectTimeline'
import CrmMeetingSchedule from 'src/views/dashboards/crm/CrmMeetingSchedule'
import CrmSocialNetworkVisits from 'src/views/dashboards/crm/CrmSocialNetworkVisits'
import CrmMostSalesInCountries from 'src/views/dashboards/crm/CrmMostSalesInCountries'
import EcommerceSalesOverview from "../../views/dashboards/ecommerce/EcommerceSalesOverview";
import CardStatisticsCharacter from "../../@core/components/card-statistics/card-stats-with-image";

const CrmDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6} className='match-height'>
        <Grid item xs={12} md={6}>
          <EcommerceSalesOverview />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CardStatisticsCharacter
            data={{
              stats: '8.14k',
              title: 'Users',
              chipColor: 'primary',
              trendNumber: '+15.6%',
              chipText: 'Year of 2022',
              src: '/images/cards/card-stats-img-1.png'
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CardStatisticsCharacter
            data={{
              stats: '12.2k',
              trend: 'negative',
              title: 'Tweets',
              chipColor: 'success',
              trendNumber: '-25.5%',
              chipText: 'Last Month',
              src: '/images/cards/card-stats-img-2.png'
            }}
          />
        </Grid>

        {/*<Grid item xs={12} md={4}>*/}
        {/*  <CrmAward/>*/}
        {/*</Grid>*/}

        {/*<Grid item xs={12} sm={6} md={4}>*/}
        {/*  <CardStatisticsVertical*/}
        {/*    stats='15k'*/}
        {/*    color='primary'*/}
        {/*    trendNumber='+22%'*/}
        {/*    title='Subscribers'*/}
        {/*    chipText='Last 4 Month'*/}
        {/*    icon={<Icon icon='mdi:cart-plus' />}*/}
        {/*  />*/}

        {/*</Grid>*/}
        {/*<Grid item xs={12} sm={6} md={4}>*/}
        {/*  <CardStatisticsVertical*/}
        {/*    stats='13.4k'*/}
        {/*    color='success'*/}
        {/*    trendNumber='+38%'*/}
        {/*    title='users'*/}
        {/*    chipText='Last Six Month'*/}
        {/*    icon={<Icon icon='mdi:currency-usd' />}*/}
        {/*  />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} sm={6} md={4}>*/}
        {/*  <CardStatisticsVertical*/}
        {/*    stats='143.4k'*/}
        {/*    color='success'*/}
        {/*    trendNumber='+38%'*/}
        {/*    title='tweets'*/}
        {/*    chipText='Last Six Month'*/}
        {/*    icon={<Icon icon='mdi:currency-usd' />}*/}
        {/*  />*/}
        {/*</Grid>*/}


        {/*<Grid item xs={6} sm={3} md={2}>*/}
        {/*  /!*<CrmTotalProfit />*!/*/}
        {/*</Grid>*/}


        {/*<Grid item xs={6} sm={3} md={2}>*/}
        {/*  /!*<CrmTotalGrowth />*!/*/}
        {/*</Grid>*/}




        {/*<Grid item xs={12} md={4}>*/}
        {/*  <CrmOrganicSessions />*/}
        {/*</Grid>*/}


        {/*<Grid item xs={12} md={8}>*/}
        {/*  <CrmProjectTimeline />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} sm={6} md={4}>*/}
        {/*  <CrmWeeklyOverview />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} sm={6} md={4}>*/}
        {/*  <CrmSocialNetworkVisits />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} sm={6} md={4}>*/}
        {/*  <CrmMonthlyBudget />*/}
        {/*</Grid>*/}


        {/*<Grid item xs={12} sm={6} md={4}>*/}
        {/*  <CrmMeetingSchedule />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} sm={6} md={4}>*/}
        {/*  <CrmExternalLinks />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} sm={6} md={4}>*/}
        {/*  <CrmPaymentHistory />*/}
        {/*</Grid>*/}


        {/*<Grid item xs={12} md={4}>*/}
        {/*  <CrmMostSalesInCountries />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={8}>*/}
        {/*  <CrmTable />*/}
        {/*</Grid>*/}



        {/*this is  seperate one card*/}

        {/*<Grid item xs={12} sm={6} md={4}>*/}
        {/*<CardTwitter />*/}
        {/*</Grid>*/}



        {/*this is imported from user base see list of tweets ,this is same  page  as  in user base see list of tweet*/}

        <Grid item xs={12} sm={12} md={7} lg={7}>
          {/*<Twittercard />*/}
            <DashBoardTwittercard />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <DashboardRightSideBar />

        </Grid>

        {/*<Grid key={idx} item xs={12} sm={6} md={4}>*/}
        {/*  <CardTwitter />*/}
        {/*</Grid>*/}


      </Grid>
    </ApexChartWrapper>
  )
}

export default CrmDashboard
