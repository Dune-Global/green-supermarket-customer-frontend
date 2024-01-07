"use client"

import { Container } from "@/components/common";
import SideMenu from "@/components/common/layout/side-menu";
import SideMenuMobile from "@/components/common/layout/side-menu-mobile";
import React, { useEffect, useState } from "react";
import { DataTable } from "./(table)/data-table";
import { columns } from "./(table)/columns";
import { decodeToken, getCustomerOrderHistory } from "@/helpers";
import { OrderHistoryTable } from "@/types";
import { useRouter } from "next/navigation";

export default function OrderHistory() {
  const router = useRouter()

  const [orderDetails, setOrderDetails] = useState<OrderHistoryTable[]>([])

  useEffect(() => {

    const getCustomerData = async () => {
      const jwtToken = localStorage.getItem("jwtToken");

      if (jwtToken !== null) {
        try {
          const { data } = await decodeToken(jwtToken)
          const response = await getCustomerOrderHistory(data.id)
          setOrderDetails(response)

        } catch (error) {
          console.log(error)
        }
      } else {
        router.push("/login")
      }
    }

    getCustomerData()
  }, [router])

  return (
    <Container>
      <div className="pt-9 flex gap-5">
        <div className="hidden lg:block">
          <SideMenu />
        </div>
        <div className="w-full">
          <div className="block lg:hidden">
            <SideMenuMobile />
          </div>
          <div className="w-full">
            <DataTable columns={columns} data={orderDetails} />
          </div>
        </div>
      </div>
    </Container>
  );
}
