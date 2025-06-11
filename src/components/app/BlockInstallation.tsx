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
    <Tabs defaultValue="cli" className="w-full">
      <TabsList className="grid w-full grid-cols-2 border-b-0">
        <TabsTrigger value="cli">
          Shadcn CLI
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="cli">
        <ShadcnCliCommand component={block} />
      </TabsContent>
    </Tabs>
  )
}

export default BlockInstallation