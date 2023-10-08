import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonIcon, IonItem, IonInput, IonButton, IonButtons } from '@ionic/react';
import { logInOutline } from 'ionicons/icons'
import { logoIonic, personCircleOutline, helpCircle, chevronBackOutline} from 'ionicons/icons';
import React from 'react';
import logo from '../../img/favicon.png';

const Login: React.FC = () => {
    const router = useIonRouter();
    const [loading, dismissLoading] = useIonLoading()

    const doLogin = async(event: any)=>{
        event.preventDefault();
        await loading("Verifying Login Detail");
        setTimeout(()=>{
            dismissLoading()
            router.push("/dashboard", 'root')
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
                                <IonCardTitle>Your Account</IonCardTitle>
                                <IonCardSubtitle>Sign in to</IonCardSubtitle>
                            </IonCardHeader>
                      

                            <IonCardContent>  
                                <form onSubmit={doLogin}>
                                        <IonItem>
                                            <IonInput label="Username" labelPlacement="floating" placeholder="Enter your username"></IonInput>
                                        </IonItem>
                                        <IonItem>
                                            <IonInput type="password" label="Password" labelPlacement="floating" placeholder="Enter your password"></IonInput>
                                        </IonItem>
                                        <IonButton className="ion-margin-top" expand='block' type="submit">
                                            Login
                                            <IonIcon icon={logInOutline} size="small"></IonIcon>
                                        </IonButton>
                                        <IonButton type="button" fill="clear" routerLink="/forgetpassword" className='ion-no-margin'>Forget your password?</IonButton>
                                </form>
                            </IonCardContent>

                         </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
                    
                        
         
        </IonContent>
            <IonFooter className="ion-no-border" collapse="fade">
                <IonToolbar>
                    <IonButton routerLink='/register' color={"secondary"} className="ion-margin-top" expand='block' type="button">
                        Register
                        <IonIcon icon={personCircleOutline} size="small"></IonIcon>
                    </IonButton>
                </IonToolbar>
            </IonFooter>
    </IonPage>
       
    );
};

export default Login;