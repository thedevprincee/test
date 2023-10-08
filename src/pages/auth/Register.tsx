import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonIcon, IonItem, IonInput, IonButton, IonButtons } from '@ionic/react';
import { logInOutline } from 'ionicons/icons'
import { logoIonic, personCircleOutline, helpCircle, chevronBackOutline} from 'ionicons/icons';
import React from 'react';
import logo from '../../img/favicon.png';


const Register: React.FC = () => {
    const router = useIonRouter();

    const doRegister = (event: any)=>{
        router.push('/login', 'root')

    }
    
    return (
        <IonPage>
        <IonHeader class="ion-no-border" collapse="fade">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonButton fill="clear" routerLink="/login">
                        <IonIcon icon={chevronBackOutline}></IonIcon>
                        Back Login
                    </IonButton>
                </IonButtons>
                <IonButtons slot="primary">
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
                                    <IonCardTitle>Get Started</IonCardTitle>
                                    <IonCardSubtitle>Create your account</IonCardSubtitle>
                                </IonCardHeader>

                                <IonCardContent>
                                
                                <form>
                                        <IonItem>
                                            <IonInput label="Fullname" labelPlacement="floating" placeholder="Enter your fullname"></IonInput>
                                        </IonItem>
                                        <IonItem>
                                            <IonInput type="email" label="Email" labelPlacement="floating" placeholder="Enter your email address"></IonInput>
                                        </IonItem>
                                        <IonItem>
                                            <IonInput label="Phone No." labelPlacement="floating" placeholder="Enter your phone number"></IonInput>
                                        </IonItem>
                                        <IonItem>
                                            <IonInput label="Username" labelPlacement="floating" placeholder="Enter your username"></IonInput>
                                        </IonItem>
                                        <IonItem>
                                            <IonInput type="password" label="Password" labelPlacement="floating" placeholder="Enter your password"></IonInput>
                                        </IonItem>
                                        <IonItem>
                                            <IonInput type="password" label="Password" labelPlacement="floating" placeholder="Re-Type your password"></IonInput>
                                        </IonItem>
                                    
                                        <input type="checkbox" name="terms"/><IonButton fill="clear" routerLink="/terms" className='ion-no-margin'>Terms and Conditions</IonButton>

                                        <IonButton onClick={doRegister} color={"secondary"} className="ion-margin-top" expand='block' type="button">
                                            Sign Up &nbsp; 
                                            <IonIcon icon={personCircleOutline} size="small"></IonIcon>
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

export default Register;