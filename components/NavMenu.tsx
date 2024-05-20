"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navemenus } from "@/lib/navmenu";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

function NavMenu() {
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <div className="border-2 nav-box">
      {navemenus &&
        navemenus.map((menu: any) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size={"xm"} variant={"ghost"}>
                {menu.title} <ChevronDown />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className={`${"w-[780px]"}right-0 absolute w-full -left-96`}
            >
              <div className="grid grid-cols-3 grid-flow-dense gap-2">
                {menu.content.map((content: any) => (
                  <div className="p-2">
                    <h3>{content.subtitle}</h3>
                    <p>
                      {content.services.map((services: any) => (
                        <>{services.servicename}</>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
    </div>
  );
}

export default NavMenu;
