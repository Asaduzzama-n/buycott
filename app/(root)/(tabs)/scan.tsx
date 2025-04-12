import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CameraView, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';

const SCAN_BOX_SIZE = 250;
const { width, height } = Dimensions.get('window');

const Scan = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState<string | null>(null);

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, []);

  const handleBarcodeScanned = (result: BarcodeScanningResult[]) => {
    if (result.length > 0 && !scannedData) {
      setScannedData(result[0].rawValue);
    }
  };

  const scanBoxTop = (height - SCAN_BOX_SIZE) / 2;
  const scanBoxLeft = (width - SCAN_BOX_SIZE) / 2;

  return (
    <View style={styles.container}>
      {permission?.granted ? (
        <CameraView
          style={StyleSheet.absoluteFill}
          barcodeScannerSettings={{
            barcodeTypes: ['qr'],
          }}
          onBarcodeScanned={handleBarcodeScanned}
        />
      ) : (
        <Text>Requesting camera permission...</Text>
      )}

      {/* Overlay sections */}
      <View style={[styles.overlay, { top: 0, height: scanBoxTop }]} />
      <View style={[styles.overlay, { bottom: 0, height: scanBoxTop-80 }]} />
      <View
        style={[
          styles.overlay,
          {
            top: scanBoxTop,
            height: SCAN_BOX_SIZE,
            left: 0,
            width: scanBoxLeft,
          },
        ]}
      />
      <View
        style={[
          styles.overlay,
          {
            top: scanBoxTop,
            height: SCAN_BOX_SIZE,
            right: 0,
            width: scanBoxLeft,
          },
        ]}
      />

      {/* Scan box */}
      <View
        style={[
          styles.scanBox,
          {
            top: scanBoxTop,
            left: scanBoxLeft,
          },
        ]}
      />

      {/* Result */}
      {scannedData && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Scanned: {scannedData}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
  },
  scanBox: {
    position: 'absolute',
    width: SCAN_BOX_SIZE,
    height: SCAN_BOX_SIZE,
    borderWidth: 3,
    borderColor: '#00FF00',
    borderRadius: 12,
    zIndex: 10,
  },
  result: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 12,
    borderRadius: 8,
  },
  resultText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Scan;
