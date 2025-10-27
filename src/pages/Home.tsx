import { useState, useEffect, useRef } from 'react';
import {
  IonContent,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail
} from '@ionic/react';
import SplashScreen from '../components/SplashScreen';
import OfflinePage from '../components/OfflinePage';
import { config } from '../config';
import './Home.css';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Check network status
  useEffect(() => {
    const handleOnline = () => {
      if (hasError) {
        reloadWebView();
      }
    };

    const handleOffline = () => {
      setHasError(true);
    };

    // Initial check
    if (!navigator.onLine) {
      setHasError(true);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [hasError]);

  // Handle iframe load
  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  // Handle iframe error
  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Reload WebView
  const reloadWebView = () => {
    setIsLoading(true);
    setHasError(false);
    if (iframeRef.current) {
      iframeRef.current.src = config.webAppUrl;
    }
  };

  // Pull to refresh handler
  const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    reloadWebView();
    setTimeout(() => {
      event.detail.complete();
    }, 1000);
  };

  // Retry connection
  const handleRetry = () => {
    reloadWebView();
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Pull to Refresh */}
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        {/* Splash Screen */}
        {isLoading && !hasError && <SplashScreen />}

        {/* Offline/Error Page */}
        {hasError && <OfflinePage onRetry={handleRetry} />}

        {/* WebView */}
        {!hasError && (
          <iframe
            ref={iframeRef}
            src={config.webAppUrl}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: isLoading ? 'none' : 'block'
            }}
            title="YouTube Summarizer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;

