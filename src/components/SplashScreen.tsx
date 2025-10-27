import { IonSpinner } from '@ionic/react';
import { config } from '../config';
import './SplashScreen.css';

const SplashScreen: React.FC = () => {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="splash-logo">
          <IonSpinner name="crescent" />
        </div>
        <h1>{config.appName}</h1>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default SplashScreen;

