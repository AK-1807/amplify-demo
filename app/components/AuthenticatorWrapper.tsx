"use client";

import { Authenticator } from '@aws-amplify/ui-react';
import React from "react";
import '@aws-amplify/ui-react/styles.css';

export default function AuthenticatorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Authenticator>{children}</Authenticator>;
}

