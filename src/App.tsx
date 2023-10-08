import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Intro from './components/Swiper/Intro';
import Forgetpassword from './pages/auth/Forgetpassword';
import Terms from './pages/auth/Terms';
import Support from './pages/auth/Support';
import Dashboard from './pages/dashboard/Dashboard';
import Overview from './pages/dashboard/Overview';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route exact path="/welcome">
          <Intro />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/forgetpassword">
          <Forgetpassword/>
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/terms">
          <Terms />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

      
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
