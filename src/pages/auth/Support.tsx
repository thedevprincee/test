import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter, IonBackButton } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonIcon, IonItem, IonInput, IonButton, IonButtons, IonTextarea } from '@ionic/react';

import React from 'react';

const Support: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref='/' />
                {/* <IonButton fill="solid" routerLink="/support">
                    Back
                    <IonIcon slot="start" icon={helpCircle}></IonIcon>
                </IonButton> */}
                </IonButtons>
                    <IonTitle>App Support</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid fixed={true}>
                    <IonRow>
                        <IonCol size='12' sizeMd='12' sizeLg='6' sizeSm='12' sizeXl='4' sizeXs='12'>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Representative</IonCardTitle>
                                    <IonCardSubtitle>Chat With</IonCardSubtitle>
                                </IonCardHeader>

                                <IonCardContent>
                                
                                    <form action="" >
                                            <IonItem>
                                                <IonInput label="Email" labelPlacement="floating" placeholder="Enter your Email"></IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonInput label="Username" labelPlacement="floating" placeholder="Enter your Username"></IonInput>
                                            </IonItem>
                                            <IonItem>
                                                <IonTextarea label='Complain' labelPlacement="floating" placeholder='Enter Your complain/ message'></IonTextarea>
                                            </IonItem>
                                        
                                            <IonButton className="ion-margin-top" expand='block' type="submit">
                                                Start Chat
                                            </IonButton>
                                    </form>

                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Support;