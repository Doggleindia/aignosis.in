import { parsePhoneNumber } from 'react-phone-number-input';

// Generate UID in format: countryCode_PhoneNumber (without + symbol)
export const getPhoneUID = (phoneNumber) => {
  if (!phoneNumber) return '';
  try {
    const cleanNumber = phoneNumber.replace('+', '');
    const parsedPhoneNumber = parsePhoneNumber(phoneNumber);
    if (!parsedPhoneNumber || !parsedPhoneNumber.countryCallingCode) {
      throw new Error('Invalid phone number format');
    }
    const countryCode = parsedPhoneNumber.countryCallingCode;
    const number = cleanNumber.replace(countryCode, '').replace(/\D/g, ''); // Remove non-digit characters
    return `${countryCode}_${number}`;
  } catch (error) {
    console.error('Error parsing phone number:', error);
    return '';
  }
};

// Clean phone number by removing all non-digit characters
export const cleanPhoneNumber = (phone) => {
  return phone ? phone.replace(/\D/g, '') : '';
};
