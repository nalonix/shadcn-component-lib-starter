"use client"

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs"

import ShadcnCliCommand from "./shadcn-cli-command"

interface BlockInstallationProps {
  block: string
  children?: React.ReactNode
}


const BlockInstallation: React.FC<BlockInstallationProps> = ({ block, children }) => {
  
  return (
    <div>
      <ShadcnCliCommand component={block} />
    </div>
  )
}

export default BlockInstallation