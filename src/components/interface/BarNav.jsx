import React from 'react'
import ToolOne from './tools/ToolOne'
import ToolTwo from './tools/ToolTwo'
import ToolTheer from './tools/ToolTheer'
import ToolFour from './tools/ToolFour'
import { ModeToggle } from '../theme/ButtonDarkMode'

function BarNav() {
  return (
    <>
      <div className='flex w-full h-20 bg-gradient-to-r from-cyan-500 to-blue-500 divide-x'>
        <ToolOne/>
        <ToolTwo/>
        <ToolTheer/>
        <ToolFour/>
        <ModeToggle />
      </div>
    </>
  )
}

export default BarNav