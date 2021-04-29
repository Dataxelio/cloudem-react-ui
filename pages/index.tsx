import React, { useContext } from "react";
import Link from "next/link";
import Head from "next/head";

import { Button } from "@dataxelio/react-ui.input.button";
import { AnchorButton } from "@dataxelio/react-ui.input.anchor-button";
import { TextField } from "@dataxelio/react-ui.input.text-field";
import { SearchBar } from "@dataxelio/react-ui.input.search-bar";
import { FormGroup } from "@dataxelio/react-ui.input.form-group";
import { IntentColor } from "@dataxelio/react-ui.utils.prop-types";
import { Icon } from "@dataxelio/react-ui.element.icon";
import { Text } from "@dataxelio/react-ui.element.text";
import { Tooltip } from "@dataxelio/react-ui.overlay.tooltip";
import { CheckBox } from "../dataxelio.react-ui/input/check-box";

import { ButtonWithTooltip } from "../local-components/buttonWithTooltip";
import { Popover } from "../local-components/popover";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Create Cloudem App</title>
      </Head>

      <div className="w-full">Welcome to Cloudem Saas App !!</div>
      <div className="relative ml-5 mt-5 mr-64">
        <Icon
          className="absolute left-2 inset-y-0 my-auto pointer-events-none"
          iName="search"
          minimal
          iTransform={{ y: 0, size: 13 }}
        ></Icon>
        <input
          className="px-7 py-1.5 text-sm rounded-sm  border-1 border-gray-400 focus:border-brand-600 focus:ring-brand-500 text-gray-900"
          type="text"
        ></input>
      </div>
      <div style={{ background: "black" }} className="ml-5 mt-5 mr-5">
        <input type="password"></input>
      </div>
      <div className="flex flex-col justify-start  space-y-1 ml-5 mt-5 mr-5">
        <label className="flex-none text-sm text-gray-900" htmlFor="email">
          {"Email"}
          <span className="text-gray-600">{" (required)"}</span>
        </label>
        <TextField
          inputType="email"
          id="email"
          name="email"
          intent={IntentColor.DANGER}
          intentAtDefaultState={true}
          fill
          placeholder="Email"
        />
        <Text
          tText="Helper text with details..."
          fontSize="text-xs"
          intentColor={IntentColor.DANGER}
        ></Text>
      </div>

      <FormGroup
        className="ml-5 mt-5 mr-5"
        label="Password"
        labelFor="password"
        labelInfo="(required)"
        helperText="Enter password to connect"
        intent={IntentColor.DANGER}
      >
        <TextField
          inputType="password"
          id="password"
          name="password"
          intent={IntentColor.DANGER}
          intentAtDefaultState={true}
          placeholder="Password"
          fill
        />
      </FormGroup>

      <div className="ml-5 mt-5 mr-5">
        <SearchBar intent={IntentColor.BRAND} placeholder="Filter Subnets" />
      </div>

      <div className="w-[124.08px] h-[32px] relative bg-gray-700 ml-5 mt-16 mr-5">
        <div className="w-[8px] h-[8px] absolute top-[100%] left-[50%] bg-gray-400 transform translate-x-[-50%] translate-y-[-50%] rotate-45 z-[-1]" />
      </div>

      <div className="ml-5 mt-5 mr-5">
        <input type="checkbox"></input>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <select></select>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <Tooltip
          content="This is tooltip"
          triggerElement={
            <Button
              text="Hover and click me"
              fontSize="text-sm"
              fontWeight="font-bold"
              horizontalPadding="px-6"
              verticalPadding="py-1.5"
              outlined
              rightIcon="caret-down"
            ></Button>
          }
        />
      </div>
      <div className="ml-5 mt-5 mr-5">
        <Link href="/about" passHref>
          <AnchorButton
            text="Minimal"
            fontSize="text-sm"
            fontWeight="font-bold"
            horizontalPadding="px-6"
            verticalPadding="py-1.5"
          ></AnchorButton>
        </Link>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <Button
          text="Actions"
          fontSize="text-sm"
          fontWeight="font-bold"
          horizontalPadding="px-6"
          verticalPadding="py-1.5"
          outlined
          rightIcon="caret-down"
        ></Button>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <Button
          text="Create disk"
          fontSize="text-sm"
          fontWeight="font-bold"
          horizontalPadding="px-6"
          verticalPadding="py-1.5"
          outlined
          intent={IntentColor.BRAND}
        ></Button>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <Button
          fontSize="text-sm"
          fontWeight="font-semibold"
          horizontalPadding="px-6"
          verticalPadding="py-1.5"
          intent={IntentColor.BRAND}
          leftIcon="folder"
          rightIcon="caret-up"
          text="Create subnet"
          onClick={evt => {
            evt.preventDefault();
            console.log("Button 1 clicked!!");
          }}
        ></Button>
      </div>
      <div className="ml-5 mt-5 mr-5">
        <Button
          fontSize="text-sm"
          fontWeight="font-light"
          horizontalPadding="px-6"
          verticalPadding="py-6"
          intent={IntentColor.BRAND}
          leftIcon="plus"
          leftIconTransform={{ size: 32 }}
          borderRadius="rounded-full"
          boxShadow="shadow-xl"
          onClick={evt => {
            evt.preventDefault();
            console.log("Button 2 clicked!!");
          }}
        ></Button>
      </div>
    </div>
  );
};

export default Index;
