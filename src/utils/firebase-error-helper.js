export const getFriendlyFirebaseError = (error) => {
  const firebaseErrorMessages = {
    'auth/invalid-phone-number': 'Invalid phone number. Please check and try again.',
    'auth/too-many-requests': 'Too many attempts. Please try again later.',
    'auth/quota-exceeded': 'Quota exceeded. Please wait before retrying.',
    'auth/user-disabled': 'This user account is disabled.',
    'auth/network-request-failed': 'Network error. Check your internet connection.',
    'auth/missing-phone-number': 'Missing phone number.',
    'auth/invalid-verification-code': 'Incorrect OTP. Please try again.',
    'auth/code-expired': 'OTP has expired. Please request a new one.',
    'auth/missing-verification-code': 'Please enter the OTP code.',
    'auth/missing-verification-id': 'Verification ID is missing. Please try again.',
    'auth/internal-error': 'Something went wrong internally. Please retry.',
    // Add more as needed
  };

  const errorCode = error?.code;
  return firebaseErrorMessages[errorCode] || 'Unexpected error. Please try again.';
};
