import HelloWorld from '@/components/HelloWorld'
import TimesLista from '../components/times/List'
import TimeView from '../components/times/View'
import TimeCreate from '../components/times/Create'

import JogadoresLista from '../components/jogadores/List'
import JogadoresCreate from '../components/jogadores/Create'
import JogadoresView from '../components/jogadores/View'

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/Times', component: TimesLista },
  { path: '/Times/create', component: TimeCreate },
  { path: '/Times/:id', component: TimeView },
  { path: '/Jogadores', component: JogadoresLista },
  { path: '/Jogadores/create', component: JogadoresCreate },
  { path: '/Jogadores/:id', component: JogadoresView }
]

export default routes
