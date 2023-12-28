import { Dispatch, SetStateAction } from 'react';

export interface ILoginProps {
  setStorageUpdated: Dispatch<SetStateAction<boolean>>;
}