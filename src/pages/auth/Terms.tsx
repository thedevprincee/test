import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import { IonIcon, IonItem, IonInput, IonButton, IonButtons } from '@ionic/react';
import { chevronBackOutline} from 'ionicons/icons';

import React from 'react';

const Terms: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonButton fill="clear" routerLink="/register">
                        <IonIcon slot="start" icon={chevronBackOutline}></IonIcon>
                        Back
                    </IonButton>
                </IonButtons>
                    <IonTitle>Terms and Conditions</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid fixed={true}>
                    <IonRow>
                        <IonCol size='12' sizeMd='12' sizeLg='6' sizeSm='12' sizeXl='4' sizeXs='12'>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae consequuntur rem cupiditate quam impedit facere perspiciatis enim alias molestias deleniti labore, voluptas odit eius illo dolores! Aspernatur commodi inventore ad!</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae consequuntur rem cupiditate quam impedit facere perspiciatis enim alias molestias deleniti labore, voluptas odit eius illo dolores! Aspernatur commodi inventore ad!</p>
                    
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Terms;