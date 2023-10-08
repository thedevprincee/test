import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonIcon, IonItem, IonInput, IonButton, IonButtons } from '@ionic/react';
import { logInOutline } from 'ionicons/icons'
import { helpCircle, keyOutline } from 'ionicons/icons';
import React from 'react';
import logo from '../../img/favicon.png';

const Forgetpassword: React.FC = () => {
    const router = useIonRouter();
    const [loading, dismissLoading] = useIonLoading()
    
    const doRecovery = async(event: any)=>{
        event.preventDefault();
        await loading("Recovery details sent to your email");
        setTimeout(()=>{
            dismissLoading()
            router.push("/login", 'root')
        }, 5000)
    }

    return (
        <IonPage>
        <IonHeader class="ion-no-border" collapse="fade">
            <IonToolbar>
               
                <IonButtons slot="end">
                <IonButton fill="solid" routerLink="/support">
                    Support
                    <IonIcon slot="end" icon={helpCircle}></IonIcon>
                </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonGrid fixed={true}>
                <IonRow>
                    <IonCol size='12' sizeMd='12' sizeLg='6' sizeSm='12' sizeXl='4' sizeXs='12'>
                        <IonCard>
                                <div className="ion-text-center ion-padding">
                                    <img src={logo} alt="logo" width="30%" />
                                </div>
                            <IonCardHeader>
                                <IonCardTitle>Forget Passwords</IonCardTitle>
                                <IonCardSubtitle>Password Recovery</IonCardSubtitle>
                            </IonCardHeader>

                            <IonCardContent>
                            
                            <form onSubmit={doRecovery} >
                                    <IonItem>
                                        <IonInput label="Email" labelPlacement="floating" placeholder="Enter your Email"></IonInput>
                                    </IonItem>
                                
                                    <IonButton className="ion-margin-top" expand='block' type="submit">
                                        Recover Password &nbsp;
                                        <IonIcon icon={keyOutline} size="small"></IonIcon>
                                    </IonButton>
                                    <IonButton type="button" fill="clear" routerLink="/login" className='ion-no-margin'>Back to login</IonButton>
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

export default Forgetpassword;