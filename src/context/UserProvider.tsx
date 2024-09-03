'use client';

import { UserDetails } from '@/utils/types';
import { createContext, ReactNode, useState } from 'react';

interface UserContextType {
  userDetails: UserDetails | null;
  setUserDetails: (userDetails: UserDetails) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
}
