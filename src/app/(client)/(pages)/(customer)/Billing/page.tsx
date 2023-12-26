import { Container } from '@/components/common'
import SideMenu from '@/components/common/layout/side-menu'
import React from 'react'

export default function OrderHistory() {
  return (
    <Container>
      <div className="pt-9 flex gap-6">
        <div>
          <SideMenu />
        </div>
        <div>Other content here</div>
      </div>
    </Container>
  )
}