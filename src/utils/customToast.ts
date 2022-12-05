import toast from 'react-hot-toast';

import { colors } from 'styles/theme';

export const customToast = (icon: any, message: string) => {
  return toast(message, {
    icon,
    style: {
      borderRadius: '1rem',
      background: colors.grey,
      fontSize: '1.5rem',
    },
  });
};
