import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';

import React from 'react';
import { Redirect, Route } from 'react-router';
import Profile from './Profile';
import Overview from './Overview';
import Transfer from './Transfer';
import Transactions from './Transactions';
import Loan from './Loan';
import Settings from './Settings';
import Card from './Card';

const Dashboard: React.FC = () => {

    return (
      <>
        <IonPage>
          <IonMenu contentId="main">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Menu Content</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">This is the menu content.</IonContent>
          </IonMenu>

          <IonRouterOutlet id="main">
          
            <Route exact path="/dashboard/overview" component={Overview} />
            <Route  path="/dashboard/profile" component={Profile} />
            <Route  path="/dashboard/transfer" component={Transfer} />
            <Route  path="/dashboard/transactions" component={Transactions} />
            <Route  path="/dashboard/loan" component={Loan} />
            <Route  path="/dashboard/settings" component={Settings} />
            <Route  path="/dashboard/card" component={Card} />
            <Route exact path="/dashboard">
              <Redirect to="/dashboard/overview" />
            </Route>
          </IonRouterOutlet>

          {/* <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent> */}
        </IonPage>
      </>
    );
};

export default Dashboard;