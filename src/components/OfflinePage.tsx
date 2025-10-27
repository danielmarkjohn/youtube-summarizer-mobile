import { IonButton, IonIcon } from '@ionic/react';
import { cloudOfflineOutline, refreshOutline } from 'ionicons/icons';
import './OfflinePage.css';

interface OfflinePageProps {
  onRetry: () => void;
}

const OfflinePage: React.FC<OfflinePageProps> = ({ onRetry }) => {
  return (
    <div className="offline-page">
      <div className="offline-content">
        <IonIcon icon={cloudOfflineOutline} className="offline-icon" />
        <h1>No Internet Connection</h1>
        <p>Please check your internet connection and try again.</p>
        <IonButton onClick={onRetry} color="primary">
          <IonIcon slot="start" icon={refreshOutline} />
          Retry
        </IonButton>
      </div>
    </div>
  );
};

export default OfflinePage;

