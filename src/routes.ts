import { Route } from './models'
import Components from './pages/Components'

export const urls = {
  root: '/',
}


export const routes: Route[] = [
  { url: urls.root, content: Components },
]
