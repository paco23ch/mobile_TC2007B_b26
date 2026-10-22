import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Mock Account Data
const ACCOUNTS = [
  { id: 'acc-1', name: 'Primary Checking', number: '**** 4821', balance: 5420.50, currency: 'USD' },
  { id: 'acc-2', name: 'High-Yield Savings', number: '**** 9102', balance: 18350.00, currency: 'USD' },
  { id: 'acc-3', name: 'Investment Vault', number: '**** 3319', balance: 42100.75, currency: 'USD' },
];

// Mock Recent Transactions Data
const TRANSACTIONS = [
  { id: 'tx-101', merchant: 'Global Cloud Services', category: 'Infrastructure', amount: -149.99, date: '2026-10-05', card: '**** 4821' },
  { id: 'tx-102', merchant: 'University Payroll', category: 'Income', amount: 3200.00, date: '2026-10-01', card: '**** 4821' },
  { id: 'tx-103', merchant: 'CyberSec Coffee Co.', category: 'Dining', amount: -8.50, date: '2026-10-04', card: '**** 9102' },
  { id: 'tx-104', merchant: 'Mobile Dev Hardware Store', category: 'Equipment', amount: -899.00, date: '2026-09-28', card: '**** 4821' },
];

export default function Banking() {
  const [selectedAccId, setSelectedAccId] = useState('acc-1');
  const [recipientIban, setRecipientIban] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [securityPin, setSecurityPin] = useState('');
  const [isPrivacyShieldActive, setIsPrivacyShieldActive] = useState(false);

  const selectedAccount = ACCOUNTS.find((a) => a.id === selectedAccId);

  const handleExecuteTransfer = () => {
    // Basic UI Validation
    console.log("Button pressed")
    if (!recipientIban || !transferAmount || !securityPin) {
      Alert.alert('Validation Error', 'Please complete all required transfer fields.');
      return;
    }
    if (securityPin.length !== 4) {
      Alert.alert('Security Violation', 'Security PIN must be exactly 4 digits.');
      return;
    }

    console.log("Before alert")
    Alert.alert(
      'Transfer Confirmed',
      `Successfully transferred $${transferAmount} from ${selectedAccount?.name} to ${recipientIban}.`,
      [
        {
          text: 'OK',
          onPress: () => {
            setRecipientIban('');
            setTransferAmount('');
            setSecurityPin('');
          },
        },
      ]
    );
    console.log("After alert")
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.flexContainer}
        >
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {/* Header & Privacy Shield Toggle */}
            <View style={styles.headerRow}>
              <View>
                <Text style={styles.brandTitle}>SECURE BANKING</Text>
                <Text style={styles.subTitle}>TC2007B Mobile Vault</Text>
              </View>
              <Pressable
                onPress={() => setIsPrivacyShieldActive(!isPrivacyShieldActive)}
                style={[
                  styles.shieldBtn,
                  isPrivacyShieldActive && styles.shieldBtnActive,
                ]}
              >
                <Text style={styles.shieldBtnText}>
                  {isPrivacyShieldActive ? 'Shield: ON' : 'Shield: OFF'}
                </Text>
              </Pressable>
            </View>

            {/* Account Switcher Header (Horizontal FlatList) */}
            <Text style={styles.sectionHeader}>Select Account</Text>
            <FlatList
              data={ACCOUNTS}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.accountListContainer}
              renderItem={({ item }) => {
                const isSelected = item.id === selectedAccId;
                return (
                  <Pressable
                    onPress={() => setSelectedAccId(item.id)}
                    style={[
                      styles.accountCard,
                      isSelected && styles.accountCardSelected,
                    ]}
                  >
                    <Text style={styles.accountName}>{item.name}</Text>
                    <Text style={styles.accountNumber}>{item.number}</Text>
                    <Text style={styles.accountBalance}>
                      {isPrivacyShieldActive
                        ? '****.** USD'
                        : `$${item.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD`}
                    </Text>
                  </Pressable>
                );
              }}
            />

            {/* Privacy Overlay Banner */}
            {isPrivacyShieldActive && (
              <View style={styles.privacyBanner}>
                <Text style={styles.privacyBannerText}>
                  🔒 Privacy Shield Active — Sensitive financial balances masked.
                </Text>
              </View>
            )}

            {/* Transfer Money Form Section */}
            <View style={styles.formCard}>
              <Text style={styles.formTitle}>Transfer Funds</Text>

              {/* Recipient IBAN Input */}
              <Text style={styles.inputLabel}>Recipient IBAN / Account</Text>
              <TextInput
                style={styles.textInput}
                value={recipientIban}
                onChangeText={setRecipientIban}
                placeholder="US89 3704 0044 0532 0130 00"
                placeholderTextColor="#64748b"
                autoCapitalize="characters"
                autoCorrect={false}
                maxLength={34}
              />

              {/* Transfer Amount Input */}
              <Text style={styles.inputLabel}>Amount (\$ USD)</Text>
              <TextInput
                style={styles.textInput}
                value={transferAmount}
                onChangeText={setTransferAmount}
                placeholder="0.00"
                placeholderTextColor="#64748b"
                keyboardType="decimal-pad"
                autoCorrect={false}
              />

              {/* Security PIN Field (Front-End Defense) */}
              <Text style={styles.inputLabel}>4-Digit Security Authorization PIN</Text>
              <TextInput
                style={[styles.textInput, styles.pinInput]}
                value={securityPin}
                onChangeText={setSecurityPin}
                placeholder="••••"
                placeholderTextColor="#64748b"
                keyboardType="number-pad"
                secureTextEntry={true} // Password Masking
                autoCapitalize="none"
                autoCorrect={false} // Prevent User Dictionary Caching
                contextMenuHidden={true} // Prevent Clipboard Scraping
                maxLength={4} // Enforce strict length
              />

              {/* Execute Submit Button */}
              <Pressable
                onPress={handleExecuteTransfer}
                style={({ pressed }) => [
                  styles.submitBtn,
                  pressed && styles.submitBtnPressed,
                ]}
              >
                <Text style={styles.submitBtnText}>Confirm Authorization & Send</Text>
              </Pressable>
            </View>

            {/* Transaction History Section */}
            <Text style={styles.sectionHeader}>Recent Activity</Text>
            {TRANSACTIONS.map((tx) => (
              <View key={tx.id} style={styles.txRow}>
                <View style={styles.txMain}>
                  <Text style={styles.txMerchant}>{tx.merchant}</Text>
                  <Text style={styles.txSub}>
                    {tx.category} • {tx.card} • {tx.date}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.txAmount,
                    tx.amount > 0 ? styles.txPositive : styles.txNegative,
                  ]}
                >
                  {tx.amount > 0 ? `+$${tx.amount.toFixed(2)}` : `-$${Math.abs(tx.amount).toFixed(2)}`}
                </Text>
              </View>
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0b0f19' },
  flexContainer: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 32 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  brandTitle: { fontSize: 20, fontWeight: '900', color: '#38bdf8', letterSpacing: 1 },
  subTitle: { fontSize: 12, color: '#64748b' },
  shieldBtn: {
    backgroundColor: '#1e293b',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
  },
  shieldBtnActive: { backgroundColor: '#0284c7', borderColor: '#38bdf8' },
  shieldBtnText: { color: '#ffffff', fontSize: 12, fontWeight: 'bold' },
  sectionHeader: { fontSize: 16, fontWeight: 'bold', color: '#f1f5f9', marginTop: 12, marginBottom: 10 },
  accountListContainer: { paddingBottom: 8 },
  accountCard: {
    backgroundColor: '#1e293b',
    width: 200,
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  accountCardSelected: { backgroundColor: '#0f172a', borderColor: '#38bdf8', borderWidth: 2 },
  accountName: { color: '#94a3b8', fontSize: 12, fontWeight: '600' },
  accountNumber: { color: '#64748b', fontSize: 11, marginTop: 2 },
  accountBalance: { color: '#f8fafc', fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  privacyBanner: {
    backgroundColor: '#0369a1',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  privacyBannerText: { color: '#ffffff', fontSize: 12, fontWeight: '600', textAlign: 'center' },
  formCard: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  formTitle: { fontSize: 16, fontWeight: 'bold', color: '#38bdf8', marginBottom: 12 },
  inputLabel: { color: '#cbd5e1', fontSize: 12, fontWeight: '600', marginTop: 8, marginBottom: 4 },
  textInput: {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#475569',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    fontSize: 14,
  },
  pinInput: { letterSpacing: 6, fontSize: 18 },
  submitBtn: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 18,
    alignItems: 'center',
  },
  submitBtnPressed: { backgroundColor: '#1d4ed8' },
  submitBtnText: { color: '#ffffff', fontWeight: 'bold', fontSize: 14 },
  txRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  txMain: { flex: 1 },
  txMerchant: { color: '#ffffff', fontWeight: '600', fontSize: 14 },
  txSub: { color: '#64748b', fontSize: 11, marginTop: 2 },
  txAmount: { fontWeight: 'bold', fontSize: 14 },
  txPositive: { color: '#4ade80' },
  txNegative: { color: '#f87171' },
});