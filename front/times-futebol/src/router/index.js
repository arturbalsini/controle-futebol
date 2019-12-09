import HelloWorld from '@/components/HelloWorld'
import TimesLista from '../components/times/List'
import TimeView from '../components/times/View'
import TimeCreate from '../components/times/Create'

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/Times', component: TimesLista },
  { path: '/Times/create', component: TimeCreate },
  { path: '/Times/:id', component: TimeView }
]

export default routes
