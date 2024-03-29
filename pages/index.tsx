import React from "react";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { useIsSSR } from "@react-aria/ssr";

import logoPic from "../public/Cloudem_Logo_Complet_75x15.png";
import logoPic1 from "../public/Cloudem_Logo_Unitary_50x54.png";

import Joi from "joi";

import { Item, Section } from "@react-stately/collections";
import { useTreeData, TreeNode } from "@react-stately/data";

import { TreeItem, FormInputEntry } from "@dataxelio/react-ui.utils.prop-types";
import { Button } from "@dataxelio/react-ui.input.button";
import { AnchorButton } from "@dataxelio/react-ui.input.anchor-button";
import { LinkButton } from "@dataxelio/react-ui.input.link-button";
import { TextField } from "@dataxelio/react-ui.input.text-field";
import { TextArea } from "@dataxelio/react-ui.input.text-area";
import { SearchBar } from "@dataxelio/react-ui.input.search-bar";
import { IconStyle, IntentColor } from "@dataxelio/react-ui.utils.prop-types";
import { Icon } from "@dataxelio/react-ui.element.icon";
import { Text } from "@dataxelio/react-ui.element.text";
import { Paragraph } from "@dataxelio/react-ui.element.paragraph";
import { Divider } from "@dataxelio/react-ui.element.divider";
import { Title } from "@dataxelio/react-ui.element.title";
import { Tooltip } from "@dataxelio/react-ui.overlay.tooltip";
import { CheckBox } from "../dataxelio.react-ui/input/check-box";
import { Card } from "@dataxelio/react-ui.surface.card";
import { Form } from "@dataxelio/react-ui.element.form";
import { ResourceViewer } from "@dataxelio/react-ui.surface.resource-viewer";

import { ButtonWithTooltip } from "../local-components/buttonWithTooltip";
import { TestContent } from "../local-components/testContent";

import { Header } from "@dataxelio/react-ui.element.header";
import { ContentText } from "@dataxelio/react-ui.element.content-text";
import { Content } from "@dataxelio/react-ui.element.content";
import { Footer } from "@dataxelio/react-ui.element.footer";

import { BasicLayout } from "@dataxelio/react-ui.layout.basic-layout";
import { FlexLayout } from "@dataxelio/react-ui.layout.flex-layout";
import { GridLayout } from "@dataxelio/react-ui.layout.grid-layout";
import { Label } from "@dataxelio/react-ui.element.label";
import { Dialog } from "@dataxelio/react-ui.overlay.dialog";
import { Menu } from "@dataxelio/react-ui.element.menu";
import { ListBox } from "@dataxelio/react-ui.element.list-box";
import { PopoverTrigger } from "@dataxelio/react-ui.overlay.popover-trigger";
import { Select } from "@dataxelio/react-ui.input.select";
import { PickerSelect } from "@dataxelio/react-ui.input.picker-select";
import { MenuButton } from "@dataxelio/react-ui.navigation.menu-button";
import { PropertyEditorButton } from "@dataxelio/react-ui.input.property-editor-button";
import { NavbarGroup } from "@dataxelio/react-ui.element.navbar-group";
import { Navbar } from "@dataxelio/react-ui.navigation.navbar";
import { Sidebar } from "@dataxelio/react-ui.navigation.sidebar";
import { ListView } from "@dataxelio/react-ui.surface.list-view";
import { TreeView } from "@dataxelio/react-ui.surface.tree-view";
import { FormBuilder } from "@dataxelio/react-ui.surface.form-builder";

const Index = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDialog2, setOpenDialog2] = React.useState(false);

  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);

  const [propertyValue, setPropertyValue] = React.useState<string>("Default");

  const [selectedAppItem, setSelectedAppItem] = React.useState<TreeItem | undefined>(undefined);

  const [selectedResourceItem, setSelectedResourceItem] = React.useState<TreeItem | undefined>(
    undefined
  );

  const [expandedIds, setExpandedIds] = React.useState<Set<React.Key> | undefined>(
    new Set(["00", "01", "02", "03", "04"])
  );

  const [expandedTreeIds, setExpandedTreeIds] = React.useState<Set<React.Key> | undefined>(
    new Set(["01", "03"])
  );

  const [selectedListItemCustomId, setSelectedListItemCustomId] = React.useState<
    string | undefined
  >("02");
  const [selectedListItem, setSelectedListItem] = React.useState<TreeItem | undefined>(undefined);

  const [selectedTreeItem, setSelectedTreeItem] = React.useState<TreeItem | undefined>(undefined);

  const [selectedListBoxItemLabel, setSelectedListBoxItemLabel] = React.useState<
    string | undefined
  >("Google");

  const [inputValues, setInputValues] = React.useState<string[]>(["", "", ""]);

  const [inputResults, setInputResults] = React.useState(new Map<string, string>([]));

  const [inputErrors, setInputErrors] = React.useState(new Map<string, string>([]));

  const [havingErrorResult, setHavingErrorResult] = React.useState<boolean>(true);

  const [itemIdValue, setItemIdValue] = React.useState<string>("");

  const menuItems1: TreeItem[] = [
    {
      id: "1",
      path: "Animals",
      label: "Animals",
      children: [
        { id: "11", path: "Aardvark", label: "Aardvark" },
        { id: "12", path: "Kangaroo", label: "Kangaroo" },
        { id: "13", path: "Snake", label: "Snake" },
      ],
    },
    {
      id: "2",
      path: "People",
      label: "People",
      children: [
        { id: "21", path: "Danni", label: "Danni" },
        { id: "22", path: "Devon", label: "Devon" },
        {
          id: "23",
          path: "Ross",
          label: "Ross",
          children: [{ id: "231", path: "Tests", label: "Tests" }],
        },
      ],
    },
    {
      id: "3",
      path: "Children",
      label: "Children",
      children: [
        { id: "31", path: "Edem", label: "Edem" },
        { id: "32", path: "Femi", label: "Femi" },
        {
          id: "33",
          path: "Widad",
          label: "Widad",
          children: [
            { id: "331", path: "Irfane", label: "Irfane" },
            { id: "332", path: "Ibath", label: "Ibath" },
          ],
        },
      ],
    },
  ];

  const tree1 = useTreeData<TreeItem>({
    initialItems: menuItems1,
    initialSelectedKeys: [],
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  });

  const menuItems2: TreeItem[] = [
    {
      id: "1",
      path: "Animaux",
      label: "Animaux",
      children: [
        { id: "11", path: "Aardvark", label: "Aardvark" },
        { id: "12", path: "Kangaroo", label: "Kangaroo" },
        { id: "13", path: "Snake", label: "Snake" },
      ],
    },
    {
      id: "2",
      path: "Personnes",
      label: "Personnes",
      children: [
        { id: "21", path: "Danni", label: "Danni", leftIcon: "folder", rightIcon: "eye" },
        { id: "22", path: "Devon", label: "Devon" },
        {
          id: "23",
          path: "Ross",
          label: "Ross",
          children: [{ id: "231", path: "Tests", label: "Tests" }],
        },
      ],
    },
    {
      id: "3",
      path: "Enfants",
      label: "Enfants",
      children: [
        { id: "31", path: "Edem", label: "Edem" },
        { id: "32", path: "Femi", label: "Femi" },
        {
          id: "33",
          path: "Widad",
          label: "Widad",
          children: [
            { id: "331", path: "Irfane", label: "Irfane" },
            { id: "332", path: "Ibath", label: "Ibath" },
          ],
        },
      ],
    },
  ];

  const tree2 = useTreeData<TreeItem>({
    initialItems: menuItems2,
    initialSelectedKeys: [],
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  });

  const menuItems3: TreeItem[] = [
    {
      id: "1",
      path: "Animals",
      label: "Animals",
      children: [
        { id: "11", path: "Aardvark", label: "Aardvarkka" },
        { id: "12", path: "Kangaroo", label: "Kangaroo", disabled: true },
        { id: "13", path: "Snake", label: "Snake" },
      ],
    },
    {
      id: "2",
      path: "People",
      label: "People",
      children: [
        { id: "21", path: "Danni", label: "Danni" },
        { id: "22", path: "Devon", label: "Devon" },
        {
          id: "23",
          path: "Ross",
          label: "Ross",
        },
      ],
    },
    {
      id: "3",
      path: "Children",
      label: "Children",
      children: [
        { id: "31", path: "Edem", label: "Edem" },
        { id: "32", path: "Femi", label: "Femi" },
        {
          id: "33",
          path: "Widad",
          label: "Widad",
        },
      ],
    },
  ];

  const isSSR = useIsSSR();

  const router = useRouter();

  React.useEffect(() => {
    if (!!selectedAppItem) {
      console.log(`Selected App = ${selectedAppItem.label}`);
    }
  }, [selectedAppItem?.id]);

  React.useEffect(() => {
    if (!!selectedResourceItem) {
      console.log(`Selected Resource = ${selectedResourceItem.label}`);

      if (!selectedResourceItem.children && selectedResourceItem.path.length > 0) {
        router.push(selectedResourceItem.path);
      }
    }
  }, [selectedResourceItem]);

  React.useEffect(() => {
    if (!!selectedListItem) {
      console.log(`Selected List Item = ${selectedListItem.label}`);

      if (!selectedListItem.children && selectedListItem.path.length > 0) {
        router.push(selectedListItem.path);
      }
    }
  }, [selectedListItem]);

  React.useEffect(() => {
    if (!!selectedTreeItem) {
      console.log(`Selected Tree Item = ${selectedTreeItem.label}`);

      if (!selectedTreeItem.children && selectedTreeItem.path.length > 0) {
        router.push(selectedTreeItem.path);
      }
    }
  }, [selectedTreeItem]);

  React.useEffect(() => {
    console.log(inputValues);
  }, [inputValues]);

  React.useEffect(() => {
    console.log("Input Results : ");
    console.log(inputResults);
  }, [inputResults]);

  React.useEffect(() => {
    console.log("Input Errors : ");
    console.log(inputErrors);
  }, [inputErrors]);

  React.useEffect(() => {
    console.log("HavingError Result : ");
    console.log(havingErrorResult);
  }, [havingErrorResult]);

  const inputNames = ["account", "email", "password"];

  const schemaMap = new Map<string, Joi.StringSchema>([
    [inputNames[0], Joi.string().required()],
    [
      inputNames[1],
      Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    ],
    [inputNames[2], Joi.string().required()],
    ["toto", Joi.string().allow("")],
  ]);

  const schema = Joi.object().keys(Object.fromEntries(schemaMap));

  return (
    <div>
      <Head>
        <title>Create Cloudem App</title>
      </Head>

      {!isSSR && (
        <>
          <Navbar darkMode dividerAfterHeadingGroup>
            <NavbarGroup alignment="heading">
              <LinkButton
                path="/"
                horizontalPadding="px-2"
                verticalPadding="py-1"
                onPress={() => console.log("Cloudem Anchor Button is pressed")}
              >
                <Image src={logoPic} />
              </LinkButton>
            </NavbarGroup>
            <NavbarGroup alignment="left">
              <MenuButton
                label="Select an app"
                menuDarkMode
                syncButtonWithSelectedItem
                minimal
                intent={IntentColor.BRAND}
                intentAtDefaultState={false}
                useDarkGrayAsDefaultIntent
                width="w-36"
                height="h-10"
                fontWeight="font-normal"
                // gapBetweenElements="gap-3"
                // popoverWidth="w-20"
                popoverInternalVerticalMargin="my-3"
                menuForceItemLowGrayBackgroundAtHoverState
                menuGapBetweenItems="gap-3"
                menuSortItems={false}
                menuItems={[
                  { label: "Designer", path: "/designer" },
                  { label: "Administrator", path: "/administrator" },
                ]}
                setSelectedMenuItem={selectectedItem => setSelectedAppItem(selectectedItem)}
              />
              {!!selectedAppItem && selectedAppItem.label === "Designer" && (
                <MenuButton
                  label="Select a project"
                  menuDarkMode
                  syncButtonWithSelectedItem
                  minimal
                  intent={IntentColor.BRAND}
                  intentAtDefaultState={false}
                  useDarkGrayAsDefaultIntent
                  // width="w-40"
                  height="h-10"
                  fontWeight="font-normal"
                  gapBetweenElements="gap-2"
                  popoverInternalVerticalMargin="my-3"
                  menuForceItemLowGrayBackgroundAtHoverState
                  // menuGapBetweenItems="gap-2"
                  menuItems={[
                    { label: "Project1 - AWS (Paris)", path: "/" },
                    { label: "Project2 - AWS (Ireland)", path: "/designer" },
                    { label: "Project3 - GCP (Frankfurt)", path: "/administrator" },
                  ]}
                />
              )}
            </NavbarGroup>
            <NavbarGroup alignment="center">
              <SearchBar
                intent={IntentColor.BRAND}
                intentAtDefaultState={false}
                placeholder="Search for services and features"
                width="w-80"
                verticalPadding="py-1"
                ringedFade
                aria-label="Filter Subnets"
              />
            </NavbarGroup>
            <NavbarGroup alignment="right">
              <MenuButton
                label="Actions"
                menuDarkMode
                minimal
                intent={IntentColor.BRAND}
                intentAtDefaultState={false}
                useDarkGrayAsDefaultIntent
                // width="w-28"
                height="h-10"
                fontWeight="font-normal"
                // gapBetweenElements="gap-2"
                popoverPlacement="bottom start"
                popoverMaxWidth="max-w-max"
                popoverInternalVerticalMargin="my-3"
                menuForceItemLowGrayBackgroundAtHoverState
                menuGapBetweenItems="gap-2"
                menuItems={[
                  { label: "Account", path: "/account" },
                  { label: "Dashboard", path: "/dashboard" },
                  { label: "Organization", path: "/organization" },
                  { label: "About", path: "/about" },
                  { label: "Home", path: "/" },
                ]}
              />
              <MenuButton
                label="Account"
                useLabelAsButtonText={false}
                withHandler={false}
                menuDarkMode
                minimal
                intent={IntentColor.BRAND}
                intentAtDefaultState={false}
                useDarkGrayAsDefaultIntent
                leftIcon="user"
                width="w-auto"
                height="h-10"
                fontWeight="font-normal"
                popoverPlacement="bottom end"
                popoverInternalVerticalMargin="my-3"
                menuForceItemLowGrayBackgroundAtHoverState
                menuGapBetweenItems="gap-2"
                menuItems={[
                  { label: "Account", path: "/account" },
                  { label: "Dashboard", path: "/dashboard" },
                  { label: "Organization", path: "/organization" },
                  { label: "About", path: "/about" },
                  { label: "Home", path: "/" },
                ]}
              />
            </NavbarGroup>
          </Navbar>

          <Sidebar
            // menuItemUseDarkGrayAsDefaultIntent={false}
            menuItems={[
              { label: "Dashboard", path: "/dashboard", customId: "rsrc1" },
              {
                group: "VIRTUAL PRIVATE CLOUD",
                label: "Your VPCs",
                path: "/account",
                customId: "rsrc2",
              },
              {
                group: "VIRTUAL PRIVATE CLOUD",
                label: "Subnets",
                path: "/dashboard",
                customId: "rsrc3",
              },
              {
                group: "VIRTUAL PRIVATE CLOUD",
                label: "Route Tables",
                path: "/organization",
                customId: "rsrc4",
              },
              {
                group: "VIRTUAL PRIVATE CLOUD",
                label: "Internet Gateways",
                path: "/about",
                customId: "rsrc5",
              },
              {
                group: "VIRTUAL PRIVATE CLOUD",
                label: "Egress Only Internet Gateways",
                path: "/about",
                customId: "rsrc6",
              },
              {
                group: "VIRTUAL PRIVATE CLOUD",
                label: "DHCP Options Sets",
                path: "",
                customId: "rsrc7",
              },
              {
                group: "VIRTUAL PRIVATE CLOUD",
                label: "Elastic IPs",
                path: "/",
                customId: "rsrc8",
              },
              {
                group: "VIRTUAL PRIVATE CLOUD",
                label: "Managed Prefix",
                path: "/",
                customId: "rsrc9",
              },
              {
                group: "VIRTUAL PRIVATE CLOUD",
                label: "Lists",
                path: "/about",
                customId: "rsrc10",
              },
              {
                group: "VIRTUAL PRIVATE CLOUD",
                label: "Endpoints",
                path: "/about",
                customId: "rsrc11",
              },
              {
                group: "VIRTUAL PRIVATE CLOUD",
                label: "Endpoint Services",
                path: "/about",
                customId: "rsrc12",
              },
              {
                group: "VIRTUAL PRIVATE CLOUD",
                label: "NAT Gateways",
                path: "/about",
                customId: "rsrc13",
              },
              {
                group: "VIRTUAL PRIVATE CLOUD",
                label: "Peering Connections",
                path: "/about",
                customId: "rsrc14",
              },
              { group: "SECURITY", label: "Network ACLs", path: "/about", customId: "rsrc15" },
              { group: "SECURITY", label: "Security Groups", path: "/about", customId: "rsrc16" },
              {
                group: "REACHABILITY",
                label: "Reachability Analyzer",
                path: "/about",
                customId: "rsrc17",
              },
              { group: "DNS FIREWALL", label: "Rule Groups", path: "/about", customId: "rsrc18" },
              { group: "DNS FIREWALL", label: "Domain Lists", path: "/about", customId: "rsrc19" },
            ]}
            selectedMenuItemCustomId="rsrc7"
            // defaultSelectedMenuItemLabel="Elastic IPs"
            setSelectedMenuItem={selectedItem => setSelectedResourceItem(selectedItem)}
            menuItemExpandedIds={expandedIds}
            setMenuItemExpandedIds={lexpandedIds => {
              // console.log("Index expanded ids :");
              // console.log(lexpandedIds);
              setExpandedIds(lexpandedIds);
            }}
          >
            <SearchBar
              fill
              bottomMargin="mb-3"
              intent={IntentColor.BRAND}
              intentAtDefaultState={false}
              placeholder="Search for resources"
              verticalPadding="py-1"
              ringedFade
              aria-label="Filter Respurces"
            />
          </Sidebar>

          <BasicLayout leftMargin="ml-60" topMargin="mt-16">
            <div className="ml-5 mt-5 mr-5">
              <TextField
                inputType="email"
                id="email"
                name="email"
                label="Email"
                helperText="Helper textx with details..."
                intent={IntentColor.DANGER}
                intentAtDefaultState={true}
                placeholder="Email"
                fill
                //onChange={value => console.log(value)}
              />
            </div>
            <div className="ml-5 mt-5 mr-5">
              <TextField
                inputType="password"
                id="password"
                name="password"
                label="Password"
                labelInfo="(required)"
                helperText="Enter password to connect"
                intent={IntentColor.DANGER}
                placeholder="Password"
                fill
                intentAtDefaultState={false}
              />
            </div>
            <div className="ml-5 mt-5 mr-5">
              <SearchBar
                intent={IntentColor.BRAND}
                placeholder="Filter Subnets"
                aria-label="Filter Subnets"
                fill
              />
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
              <CheckBox aria-label="test" intent={IntentColor.PRIMARY}>
                Test Battle
              </CheckBox>
            </div>
            <div className="ml-5 mt-5 mr-5">
              <Tooltip delay={0} withArrow content="This is tooltip" placement="right">
                <Button
                  text="Hover and click me"
                  fontSize="text-sm"
                  fontWeight="font-bold"
                  horizontalPadding="px-6"
                  verticalPadding="py-1.5"
                  outlined
                  rightIcon="caret-down"
                />
              </Tooltip>
            </div>
            <div className="ml-5 mt-5 mr-5">
              <Link href="/about" passHref>
                <AnchorButton
                  text="Anchor Button"
                  fontSize="text-sm"
                  fontWeight="font-bold"
                  horizontalPadding="px-6"
                  verticalPadding="py-1.5"
                  onPress={e => {
                    console.log("Minimal Button is clicked with " + e.pointerType);
                  }}
                ></AnchorButton>
              </Link>
            </div>
            <div className="ml-5 mt-5 mr-5">
              <LinkButton
                path="/about"
                text="Link Button"
                onPress={e => {
                  console.log("Minimal Button is clicked with " + e.pointerType);
                }}
              ></LinkButton>
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
                onPress={() => {
                  console.log("Button 1 clicked!!");
                }}
              >
                Create subnet
              </Button>
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
                onPress={() => {
                  console.log("Button 2 clicked!!");
                }}
              ></Button>
            </div>
            <div className="ml-5 mt-5 mr-5">
              <Button fontSize="text-sm" fontWeight="font-normal" minimal>
                Test Button
              </Button>
            </div>
            <FlexLayout
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              flexDirection="flex-row"
              flexGap="gap-2"
            >
              <Select
                listBoxRenderSectionLabel={false}
                defaultButtonText="Pick an option"
                label="Favorite Brand"
                // gapBetweenLabelAndButton="gap-2"
                outlined
                selectedListBoxItemLabel={selectedListBoxItemLabel}
                setSelectedListBoxItem={selectedItem =>
                  setSelectedListBoxItemLabel(selectedItem?.label)
                }
                // intent={IntentColor.BRAND}
                listBoxItems={[
                  { label: "Microsoft" },
                  { label: "Apple" },
                  { label: "Google" },
                  { label: "Amazon" },
                  { label: "Facebook" },
                ]}
              />
              <Select
                listBoxRenderSectionLabel={false}
                defaultButtonText="Pick a person"
                label="Favorite Person"
                width="w-48"
                outlined
                // intent={IntentColor.BRAND}
                listBoxItems={[
                  { section: "People", label: "Danni" },
                  { section: "People", label: "Devon" },
                  { section: "People", label: "Ross" },
                  { section: "Children", label: "Edem" },
                  { section: "Children", label: "Femi", disabled: true },
                  { section: "Children", label: "Irfane", disabled: true },
                  { section: "Children", label: "Ibath" },
                ]}
              />
            </FlexLayout>
            <FlexLayout
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              flexDirection="flex-row"
              flexGap="gap-2"
            >
              <PickerSelect
                menuRenderSectionLabel={false}
                label="Pick an option"
                outlined
                selectedMenuItemLabel="Gogle"
                menuItems={[
                  { label: "Microsoft" },
                  { label: "Apple" },
                  { label: "Google" },
                  { label: "Amazon" },
                  { label: "Facebook" },
                ]}
              />
              <PickerSelect
                menuRenderSectionLabel={false}
                label="Pick an option with section"
                width="w-48"
                outlined
                menuItems={[
                  { section: "People", label: "Danni" },
                  { section: "People", label: "Devon" },
                  { section: "People", label: "Ross" },
                  { section: "Children", label: "Edem" },
                  { section: "Children", label: "Femi", disabled: true },
                  { section: "Children", label: "Irfane", disabled: true },
                  { section: "Children", label: "Ibath" },
                ]}
              />
            </FlexLayout>
            <FlexLayout
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              flexDirection="flex-row"
              flexGap="gap-2"
            >
              <MenuButton
                label="Actions"
                syncButtonWithSelectedItem
                outlined
                intent={IntentColor.PRIMARY}
                width="w-32"
                menuItems={[
                  { label: "Account", path: "/account" },
                  { label: "Dashboard", path: "/dashboard" },
                  { label: "Organization", path: "/organization" },
                  { label: "About", path: "/about" },
                  { label: "Home", path: "/" },
                ]}
              />

              <MenuButton
                // menuRenderSectionLabel={false}
                label="Action List"
                syncButtonWithSelectedItem
                outlined
                intent={IntentColor.GRAY_DARK}
                menuForceItemLowGrayBackgroundAtHoverState
                // selectedMenuItemLabel="Devon"
                width="w-44"
                popoverOffset={5}
                popoverBorderRadius="rounded-md"
                popoverBorderOpacity="border-opacity-50"
                menuItems={[
                  { section: "People", label: "Danni", path: "/account" },
                  { section: "People", label: "Devon", path: "/dashboard" },
                  { section: "People", label: "Ross", path: "/organization" },
                  { section: "Children", label: "Edem", path: "/about" },
                  { section: "Children", label: "Femi", path: "/dashboard", disabled: true },
                  { section: "Children", label: "Irfane", path: "/organization", disabled: true },
                  { section: "Children", label: "Ibath", path: "/" },
                ]}
              />
            </FlexLayout>
            <FlexLayout
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              flexDirection="flex-row"
              flexGap="gap-2"
              flexMainAxisAlignment="justify-start"
              flexCrossAxisAlignment="items-center"
            >
              <Paragraph>{`Prop Name = name / Prop Value = ${propertyValue}`}</Paragraph>
              <PropertyEditorButton
                propertyName="name"
                minimal
                // intent={IntentColor.GRAY}
                horizontalPadding="px-1"
                verticalPadding="py-1"
                fontSize="text-sm"
                leftIcon="edit"
                // leftIconStyle={IconStyle.REGULAR}
                onPropertyValueChanged={value => setPropertyValue(value)}
              />
            </FlexLayout>
            <div className="ml-5 mt-5 mr-5">
              <Button
                text="Open Simple Dialog"
                fontSize="text-sm"
                fontWeight="font-bold"
                horizontalPadding="px-6"
                verticalPadding="py-1.5"
                onPress={() => {
                  setOpenDialog(true);
                }}
              ></Button>
              <Dialog
                isOpen={openDialog}
                onClose={() => setOpenDialog(false)}
                footerAlignment="right"
                dividerAfterContent
                shouldCloseOnInteractOutside={() => false}
              >
                <Header>
                  <Title>Simple Dialog</Title>
                </Header>
                <ContentText>
                  <Paragraph>
                    Welcome to this simple dialog presentation. We will show you what you can build
                    with that
                  </Paragraph>
                </ContentText>
                <Content>
                  <Paragraph>Simple Dialog Content 1</Paragraph>
                  <Paragraph>Simple Dialog Content 2</Paragraph>
                  <Paragraph>Simple Dialog Content 3</Paragraph>
                  <Paragraph>Simple Dialog Content 4</Paragraph>
                  <Paragraph>Simple Dialog Content 5</Paragraph>
                </Content>
                <Footer>
                  <Button
                    outlined
                    intent={IntentColor.DANGER}
                    borderRadius="rounded-md"
                    horizontalPadding="px-6"
                    verticalPadding="py-1.5"
                    fontSize="text-sm"
                    fontWeight="font-semibold"
                    onPress={() => {
                      setOpenDialog(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    intent={IntentColor.SUCCESS}
                    borderRadius="rounded-md"
                    horizontalPadding="px-6"
                    verticalPadding="py-1.5"
                    fontSize="text-sm"
                    fontWeight="font-semibold"
                    onPress={() => {
                      setOpenDialog(false);
                    }}
                  >
                    Validate
                  </Button>
                </Footer>
              </Dialog>
            </div>
            <div className="ml-5 mt-5 mr-5">
              <Button
                text="Open Form Dialog"
                fontSize="text-sm"
                fontWeight="font-bold"
                horizontalPadding="px-6"
                verticalPadding="py-1.5"
                onPress={() => {
                  setOpenDialog2(true);
                }}
              ></Button>
              <Dialog
                asForm
                isOpen={openDialog2}
                onClose={() => setOpenDialog2(false)}
                onSubmit={e => {
                  e.preventDefault();
                  alert("Dialog form is submitted");
                }}
                maxWidth="max-w-2xl"
                footerAlignment="right"
              >
                <Header>
                  <Title>Simple Form Card</Title>
                </Header>
                <Content>
                  <FlexLayout
                    flexDirection="flex-col"
                    flexWrap="flex-nowrap"
                    flexGap="gap-5"
                    flexMainAxisAlignment="justify-center"
                    flexCrossAxisAlignment="items-start"
                    fluid
                  >
                    <TextField
                      inputType="email"
                      id="email2"
                      name="email"
                      label="Email"
                      labelInfo="(required)"
                      //helperText="Enter password to connect"
                      intent={IntentColor.BRAND}
                      placeholder="Email"
                      intentAtDefaultState={false}
                      fill
                    />
                    <TextField
                      inputType="password"
                      id="password2"
                      name="password"
                      label="Password"
                      labelInfo="(required)"
                      helperText="Enter password to connect"
                      intent={IntentColor.DANGER}
                      placeholder="Password"
                      intentAtDefaultState={false}
                      fill
                    />
                    <CheckBox aria-label="terms" intent={IntentColor.PRIMARY}>
                      Accept Terms
                    </CheckBox>
                    <TextArea
                      id="message"
                      name="message"
                      label="Message"
                      labelInfo="(optional)"
                      intent={IntentColor.BRAND}
                      placeholder="Enter your message here"
                      helperText="Enter your message"
                      intentAtDefaultState={false}
                      fill
                    />
                  </FlexLayout>
                </Content>
                <Footer>
                  <Button
                    outlined
                    borderRadius="rounded-lg"
                    horizontalPadding="px-6"
                    verticalPadding="py-1.5"
                    fontSize="text-sm"
                    fontWeight="font-semibold"
                    onPress={() => {
                      setOpenDialog2(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    intent={IntentColor.BRAND}
                    borderRadius="rounded-lg"
                    horizontalPadding="px-6"
                    verticalPadding="py-1.5"
                    fontSize="text-sm"
                    fontWeight="font-semibold"
                  >
                    Submit
                  </Button>
                </Footer>
              </Dialog>
            </div>
            <BasicLayout
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              maxWidth="max-w-md"
              debugMode
            >
              <BasicLayout
                display="block"
                leftMargin="ml-2"
                topMargin="mt-2"
                rightMargin="mr-2"
                bottomMargin="mb-2"
                debugMode
              >
                First Basic Child
              </BasicLayout>
              <BasicLayout
                display="block"
                leftMargin="ml-2"
                topMargin="mt-2"
                rightMargin="mr-2"
                bottomMargin="mb-2"
                debugMode
              >
                Second Basic Child
              </BasicLayout>
              <Paragraph textOverflow="truncate">CardHeade</Paragraph>
            </BasicLayout>
            <FlexLayout
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              flexDirection="flex-row"
              flexMainAxisAlignment="justify-start"
              flexGap="gap-2"
              debugMode
            >
              <BasicLayout debugMode>First Flex Child</BasicLayout>
              <BasicLayout debugMode>
                <BasicLayout debugMode>Second Flex Child 1</BasicLayout>
                <BasicLayout debugMode>Second Flex Child 222222</BasicLayout>
              </BasicLayout>
            </FlexLayout>
            <GridLayout
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              gridTemplateColumns="grid-cols-2"
              gridColumnSpan="col-auto"
              debugMode
            >
              <BasicLayout debugMode>First Grid Child</BasicLayout>
              <BasicLayout debugMode>Second Grid Child</BasicLayout>
              <BasicLayout debugMode>Third Grid Child</BasicLayout>
              <BasicLayout debugMode>Fourth Grid Child</BasicLayout>
              <BasicLayout debugMode>Fifth Grid Child</BasicLayout>
            </GridLayout>
            <BasicLayout
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              maxWidth="max-w-md"
              debugMode
            >
              <FlexLayout
                horizontalMargin="mx-14"
                verticalMargin="my-14"
                flexDirection="flex-col"
                flexWrap="flex-nowrap"
                flexGap="gap-5"
                debugMode
              >
                <BasicLayout flexGridItemCrossAxisAlignment="self-center" debugMode>
                  <Title>View Header</Title>
                </BasicLayout>
                <Divider orientation="horizontal" />
                <BasicLayout fluid debugMode>
                  View Details 1
                </BasicLayout>
                <BasicLayout fluid debugMode>
                  View Details 2
                </BasicLayout>
                <BasicLayout fluid minWidth="min-w-0" debugMode>
                  <Paragraph textOverflow="truncate">This is a paragraph</Paragraph>
                </BasicLayout>
                <footer className="justify-end">View Footer</footer>
              </FlexLayout>
            </BasicLayout>
            <Card
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-lg"
              // maxWidth="max-w-xl"
              headerOrientation="portrait"
              headerAlignment="left"
              headerGap="gap-1"
              footerAlignment="center"
              dividerAfterContent
              internalVerticalMargin="my-5"
              footerInternalTopMargin="mt-12"
              footerInternalBottomMargin="mb-12"
              fluid={false}
            >
              <Header>
                <Title>Simple Card</Title>
                <Paragraph fontSize="text-xs">Details</Paragraph>
              </Header>
              <ContentText>
                Welcome to this simple card presentation. We will show you what you can build with
                that
              </ContentText>
              <Content>
                <Paragraph>Simple Card Content 1</Paragraph>
                <Paragraph>Simple Card Content 2</Paragraph>
                <Paragraph>Simple Card Content 3</Paragraph>
                <Paragraph>Simple Card Content 4</Paragraph>
                <Paragraph>Simple Card Content 5</Paragraph>
              </Content>
              <Footer>
                <Paragraph fontSize="text-xs">© 2020-2021, Cloudem all rights reserved.</Paragraph>
              </Footer>
            </Card>
            <Card
              // intent={IntentColor.GRAY_LIGHTEST}
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-lg"
              maxWidth="max-w-md"
              headerOrientation="portrait"
              headerAlignment="center"
              headerGap="gap-1"
              footerAlignment="center"
              dividerAfterContent
            >
              <Header>
                <Image src={logoPic1} />
              </Header>
              <ContentText>
                <Paragraph fontSize="text-xs">Card Content Text</Paragraph>
              </ContentText>
              <Content>
                <Paragraph>Simple Card Content 1</Paragraph>
                <Paragraph>Simple Card Content 2</Paragraph>
                <Paragraph>Simple Card Content 3</Paragraph>
                <Paragraph>Simple Card Content 4</Paragraph>
                <Paragraph>Simple Card Content 5</Paragraph>
              </Content>
              <Footer>
                <Paragraph fontSize="text-xs">© 2020-2021, Cloudem all rights reserved.</Paragraph>
              </Footer>
            </Card>
            <Card
              asForm
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-sm"
              maxWidth="max-w-xl"
              contentOrientation="portrait"
              contentAlignment="left"
              contentTextAlignment="center"
              footerAlignment="right"
              footerInternalTopMargin="mt-8"
              footerInternalBottomMargin="mb-6"
              dividerAfterHeader
              onSubmit={e => {
                e.preventDefault();

                if (havingErrorResult) {
                  alert("Form Builder cannot be submitted : There are some errors");
                } else {
                  const message = `Submitting Form Builder... 
                  Account = ${inputResults.get("Account") ?? ""}
                  Email = ${inputResults.get("Email") ?? ""}
                  Password = ${inputResults.get("Password") ?? ""}
                  Accept = ${inputResults.get("Accept") ?? "false"}
                  Country = ${inputResults.get("Country") ?? ""}
                  Town = ${inputResults.get("Town") ?? ""}
                  Message = ${inputResults.get("Message") ?? ""}
                  `;
                  alert(`Form Builder is submitted :
                  ${message}`);
                }
              }}
            >
              <Header>
                <Title>Form Builder Card</Title>
              </Header>
              <ContentText>
                <Paragraph fontSize="text-xs" intentColor={IntentColor.DANGER}>
                  Sign in your account
                </Paragraph>
              </ContentText>
              <Content>
                <FormBuilder
                  setInputValues={inValues => setInputResults(inValues)}
                  setInputErrors={inErrors => setInputErrors(inErrors)}
                  setHavingErrorResult={havingError => setHavingErrorResult(havingError)}
                  inputEntries={[
                    {
                      type: "text",
                      id: "Maccount",
                      name: "Account",
                      label: "Account",
                      labelInfo: "(required)",
                      placeholder: "Enter your account",
                      validationRule: Joi.string().required(),
                    },
                    {
                      type: "email",
                      id: "Memail",
                      name: "Email",
                      label: "Email",
                      labelInfo: "(required)",
                      placeholder: "Enter your email",
                      validationRule: Joi.string()
                        .email({ tlds: { allow: false } })
                        .required(),
                    },
                    {
                      type: "password",
                      id: "Mpassword",
                      name: "Password",
                      label: "Password",
                      labelInfo: "(required)",
                      placeholder: "Enter your password",
                      validationRule: Joi.string().required(),
                    },
                    {
                      type: "checkbox",
                      id: "Maccept",
                      name: "Accept",
                      label: "Accept terms",
                    },
                    {
                      type: "select",
                      id: "Mcountry",
                      name: "Country",
                      label: "Country",
                      placeholder: "Pick a country",
                      validationRule: Joi.string().required(),
                      selectItems: [
                        { label: "Ghana" },
                        { label: "Benin" },
                        { label: "France" },
                        { label: "Andorre" },
                        { label: "Burkina Faso" },
                        { label: "Japon" },
                        { label: "Russie" },
                      ],
                    },
                    {
                      type: "select",
                      id: "Mtown",
                      name: "Town",
                      label: "Town",
                      placeholder: "Pick a town",
                      validationRule: Joi.string().required(),
                      dependencyName: "Country",
                      selectItems: [
                        { label: "Accra", filterGroupLabel: "Ghana" },
                        { label: "Kumasi", filterGroupLabel: "Ghana" },
                        { label: "Tamale", filterGroupLabel: "Ghana" },
                        { label: "Ashaiman", filterGroupLabel: "Ghana" },
                        { label: "Techiman", filterGroupLabel: "Ghana" },
                        { label: "Cotonou", filterGroupLabel: "Benin" },
                        { label: "Porto-Novo", filterGroupLabel: "Benin" },
                        { label: "Parakou", filterGroupLabel: "Benin" },
                        { label: "Natitingou", filterGroupLabel: "Benin" },
                        { label: "Ouidah", filterGroupLabel: "Benin" },
                        { label: "Paris", filterGroupLabel: "France" },
                        { label: "Lyon", filterGroupLabel: "France" },
                        { label: "La Rochelle", filterGroupLabel: "France" },
                        { label: "Bordeaux", filterGroupLabel: "France" },
                        { label: "Nice", filterGroupLabel: "France" },
                        { label: "Canillo", filterGroupLabel: "Andorre" },
                        { label: "El Forn", filterGroupLabel: "Andorre" },
                        { label: "Meritxell", filterGroupLabel: "Andorre" },
                        { label: "Encamp", filterGroupLabel: "Andorre" },
                        { label: "Ansalonga", filterGroupLabel: "Andorre" },
                        { label: "Ouagadougou", filterGroupLabel: "Burkina Faso" },
                        { label: "Bobo-Dioulasso", filterGroupLabel: "Burkina Faso" },
                        { label: "Koudougou", filterGroupLabel: "Burkina Faso" },
                        { label: "Banfora", filterGroupLabel: "Burkina Faso" },
                        { label: "Pissila", filterGroupLabel: "Burkina Faso" },
                        { label: "Tokyo", filterGroupLabel: "Japon" },
                        { label: "Saitama", filterGroupLabel: "Japon" },
                        { label: "Shiga", filterGroupLabel: "Japon" },
                        { label: "Tochigi", filterGroupLabel: "Japon" },
                        { label: "Nagasaki", filterGroupLabel: "Japon" },
                        { label: "Moscou", filterGroupLabel: "Russie" },
                        { label: "Mourmansk", filterGroupLabel: "Russie" },
                        { label: "Léningrad", filterGroupLabel: "Russie" },
                        { label: "Kemerovo", filterGroupLabel: "Russie" },
                        { label: "Tcheliabinsk", filterGroupLabel: "Russie" },
                      ],
                    },
                    {
                      type: "textarea",
                      id: "Mmessage",
                      name: "Message",
                      label: "Message",
                      placeholder: "Enter your message here",
                      validationRule: Joi.string().required(),
                    },
                  ]}
                />
              </Content>
              <Footer>
                <Button
                  type="submit"
                  intent={IntentColor.BRAND}
                  gapBetweenElements="gap-2"
                  borderRadius="rounded-xl"
                  horizontalPadding="px-6"
                  verticalPadding="py-1.5"
                  fontSize="text-sm"
                  fontWeight="font-semibold"
                  rightIcon="lock"
                  rightIconTransform={{ size: 14 }}
                  fill
                >
                  Submit
                </Button>
              </Footer>
            </Card>
            <Card
              asForm
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-sm"
              maxWidth="max-w-xl"
              contentTextAlignment="center"
              footerAlignment="right"
              dividerAfterHeader
              onSubmit={e => {
                e.preventDefault();
                alert("Simple form is submitted");
              }}
            >
              <Header>
                <Title>Simple Form Card</Title>
              </Header>
              <ContentText>
                <Paragraph fontSize="text-xs" intentColor={IntentColor.DANGER}>
                  Sign in your account
                </Paragraph>
              </ContentText>
              <Content>
                <FlexLayout
                  flexDirection="flex-col"
                  flexWrap="flex-nowrap"
                  flexGap="gap-5"
                  flexMainAxisAlignment="justify-center"
                  flexCrossAxisAlignment="items-start"
                  fluid
                >
                  <TextField
                    inputType="text"
                    id="uaccount"
                    label="Account"
                    labelInfo="(required)"
                    //helperText="Enter password to connect"
                    intent={IntentColor.BRAND}
                    placeholder="Account"
                    intentAtDefaultState={false}
                    fill
                    value={inputValues[0]}
                    onChange={value => {
                      const currentInputValues = inputValues.slice();
                      currentInputValues[0] = value;
                      setInputValues(currentInputValues);
                    }}
                    // onBlur={() => {
                    //   const valueMap = new Map<string, string>([
                    //     [inputNames[0], inputValues[0]],
                    //     [inputNames[1], inputValues[1]],
                    //     [inputNames[2], inputValues[2]],
                    //     ["toto", "titi"],
                    //   ]);
                    //   const { value, error } = schema.validate(Object.fromEntries(valueMap), {
                    //     abortEarly: false,
                    //     errors: { label: "key", wrap: { label: false } },
                    //   });
                    //   console.log("Stable value object");
                    //   console.log(value);
                    //   console.log("Stable value map");
                    //   const stableValueMap = new Map<string, string>(Object.entries(value));
                    //   console.log(stableValueMap);
                    //   console.log("Account Input Error = ");
                    //   console.log(error?.details);
                    // }}
                    // {...register("uAccount", { required: true })}
                  />
                  <TextField
                    inputType="email"
                    id="uemail"
                    label="Email"
                    labelInfo="(required)"
                    //helperText="Enter password to connect"
                    intent={IntentColor.BRAND}
                    placeholder="Email"
                    intentAtDefaultState={false}
                    fill
                    value={inputValues[1]}
                    onChange={value => {
                      const currentInputValues = inputValues.slice();
                      currentInputValues[1] = value;
                      setInputValues(currentInputValues);
                    }}
                    // onBlur={() => {
                    //   const valueMap = new Map<string, string>([
                    //     [inputNames[0], inputValues[0]],
                    //     [inputNames[1], inputValues[1]],
                    //     [inputNames[2], inputValues[2]],
                    //     ["toto", ""],
                    //   ]);
                    //   const { value, error } = schema.validate(Object.fromEntries(valueMap), {
                    //     abortEarly: false,
                    //     errors: { label: "key", wrap: { label: false } },
                    //   });
                    //   console.log("Stable value object");
                    //   console.log(value);
                    //   console.log("Stable value map");
                    //   const stableValueMap = new Map<string, string>(Object.entries(value));
                    //   console.log(stableValueMap);
                    //   console.log("Email Input Error = ");
                    //   console.log(error?.details);
                    // }}
                    // {...register("uEmail", { required: true })}
                  />
                  <TextField
                    inputType="password"
                    id="upassword"
                    label="Password"
                    labelInfo="(required)"
                    helperText="Enter password to connect"
                    intent={IntentColor.DANGER}
                    placeholder="Password"
                    intentAtDefaultState={false}
                    fill
                    value={inputValues[2]}
                    onChange={value => {
                      const currentInputValues = inputValues.slice();
                      currentInputValues[2] = value;
                      setInputValues(currentInputValues);
                    }}
                    // onBlur={() => {
                    //   const valueMap = new Map<string, string>([
                    //     [inputNames[0], inputValues[0]],
                    //     [inputNames[1], inputValues[1]],
                    //     [inputNames[2], inputValues[2]],
                    //     ["toto", "taitai"],
                    //   ]);
                    //   const { value, error } = schema.validate(Object.fromEntries(valueMap), {
                    //     abortEarly: false,
                    //     errors: { label: "key", wrap: { label: false } },
                    //   });
                    //   console.log("Stable value object");
                    //   console.log(value);
                    //   console.log("Stable value map");
                    //   const stableValueMap = new Map<string, string>(Object.entries(value));
                    //   console.log(stableValueMap);
                    //   console.log("Password Input Error = ");
                    //   console.log(error?.details);
                    // }}
                    // {...register("uPassword", { required: true })}
                  />
                  <CheckBox aria-label="terms" intent={IntentColor.PRIMARY}>
                    Accept Terms
                  </CheckBox>
                  <TextArea
                    id="message"
                    name="message"
                    label="Message"
                    labelInfo="(optional)"
                    intent={IntentColor.BRAND}
                    placeholder="Enter your message here"
                    helperText="Enter your message"
                    intentAtDefaultState={false}
                    fill
                  />
                </FlexLayout>
              </Content>
              <Footer>
                <Button
                  type="submit"
                  intent={IntentColor.BRAND}
                  gapBetweenElements="gap-2"
                  borderRadius="rounded-xl"
                  horizontalPadding="px-6"
                  verticalPadding="py-1.5"
                  fontSize="text-sm"
                  fontWeight="font-semibold"
                  rightIcon="lock"
                  rightIconTransform={{ size: 14 }}
                  fill
                >
                  Submit
                </Button>
              </Footer>
            </Card>
            <Card
              asForm
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-sm"
              maxWidth="max-w-3xl"
              contentOrientation="landscape"
              footerGap="gap-3"
              footerAlignment="right"
              dividerAfterHeader
              onSubmit={e => {
                e.preventDefault();
                alert("Complex form is submitted");
              }}
            >
              <Header>
                <Title>Complex Form Card</Title>
              </Header>
              <Content>
                <FlexLayout
                  flexDirection="flex-col"
                  flexWrap="flex-nowrap"
                  flexGap="gap-5"
                  flexMainAxisAlignment="justify-center"
                  flexCrossAxisAlignment="items-start"
                  fluid
                >
                  <TextField
                    inputType="email"
                    id="email3"
                    name="email"
                    label="Email"
                    labelInfo="(required)"
                    //helperText="Enter password to connect"
                    intent={IntentColor.BRAND}
                    placeholder="Email"
                    intentAtDefaultState={false}
                    fill
                  />
                  <TextField
                    inputType="password"
                    id="password3"
                    name="password"
                    label="Password"
                    labelInfo="(required)"
                    helperText="Enter password to connect"
                    intent={IntentColor.DANGER}
                    placeholder="Password"
                    intentAtDefaultState={false}
                    fill
                  />
                  <CheckBox aria-label="terms" intent={IntentColor.PRIMARY}>
                    Accept Terms
                  </CheckBox>
                  <TextArea
                    id="message3"
                    name="message"
                    label="Message"
                    labelInfo="(optional)"
                    intent={IntentColor.BRAND}
                    placeholder="Enter your message here"
                    helperText="Enter your message"
                    intentAtDefaultState={false}
                    fill
                  />
                </FlexLayout>
                <Divider opacity={0.3} />
                <FlexLayout
                  flexDirection="flex-col"
                  flexWrap="flex-nowrap"
                  flexGap="gap-5"
                  flexMainAxisAlignment="justify-center"
                  flexCrossAxisAlignment="items-start"
                  fluid
                >
                  <TextField
                    inputType="email"
                    id="email4"
                    name="email"
                    label="Email"
                    labelInfo="(required)"
                    //helperText="Enter password to connect"
                    intent={IntentColor.BRAND}
                    placeholder="Email"
                    intentAtDefaultState={false}
                    fill
                  />
                  <TextField
                    inputType="password"
                    id="password4"
                    name="password"
                    label="Password"
                    labelInfo="(required)"
                    helperText="Enter password to connect"
                    intent={IntentColor.DANGER}
                    placeholder="Password"
                    intentAtDefaultState={false}
                    fill
                  />
                  <CheckBox aria-label="terms" intent={IntentColor.PRIMARY}>
                    Accept Terms
                  </CheckBox>
                  <TextArea
                    id="message4"
                    name="message"
                    label="Message"
                    labelInfo="(optional)"
                    intent={IntentColor.BRAND}
                    placeholder="Enter your message here"
                    helperText="Enter your message"
                    intentAtDefaultState={false}
                    fill
                  />
                </FlexLayout>
              </Content>
              <Footer>
                <Button
                  outlined
                  borderRadius="rounded-lg"
                  horizontalPadding="px-6"
                  verticalPadding="py-1.5"
                  fontSize="text-sm"
                  fontWeight="font-semibold"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  intent={IntentColor.BRAND}
                  borderRadius="rounded-lg"
                  horizontalPadding="px-6"
                  verticalPadding="py-1.5"
                  fontSize="text-sm"
                  fontWeight="font-semibold"
                >
                  Submit
                </Button>
              </Footer>
            </Card>
            <ResourceViewer
              subTitle="Subnet Details"
              leftMargin="ml-5"
              rightMargin="mr-5"
              topMargin="mt-5"
              boxShadow="shadow-md"
              // maxWidth="max-w-5xl"
              properties={[
                {
                  id: "0",
                  name: "Subnet ID",
                  value: "subnet-57383a4d-3fe2-40be-852e-c3929bbd9869",
                },
                { id: "1", name: "Available IPv4 addresses", value: "4091" },
                {
                  id: "2",
                  name: "Route table",
                  value: "rtb-352b394c",
                  asLink: true,
                  linkPath: "/about",
                },
                { id: "3", name: "Auto-assign IPv6 address", value: "No" },
                { id: "4", name: "Owner", value: "179659478299" },
                {
                  id: "5",
                  name: "State",
                  value: "Available",
                  intent: IntentColor.SUCCESS,
                  icon: "check-circle",
                  iconStyle: IconStyle.REGULAR,
                },
                { id: "6", name: "IPv6 CIDR", value: "" },
                { id: "7", name: "Network ACL", value: "acl-6b593412" },
                { id: "8", name: "Auto-assign customer", value: "No" },
                {
                  id: "9",
                  name: "Subnet ARN",
                  value: "arn:aws:ec2:eu-west-1:179659478299:subnet/subnet-5ddbfe3b",
                },
                {
                  id: "10",
                  name: "VPC",
                  value: "vpc-3357bf4a",
                  asLink: true,
                  linkPath: "/vpc/vpc-3357bf4a",
                },
                { id: "11", name: "Availability Zone", value: "eu-west-1c" },
                {
                  id: "12",
                  name: "Status",
                  value: "Failed",
                  intent: IntentColor.DANGER,
                  icon: "times-circle",
                  iconStyle: IconStyle.REGULAR,
                },
                { id: "13", name: "Default subnet", value: "Yes" },
                { id: "14", name: "Customer-owned IPv4 pool", value: "" },
                { id: "15", name: "IPv4 CIDR", value: "172.31.0.0/20" },
                { id: "16", name: "Availability Zone ID", value: "euw1-az1" },
              ]}
            />
            <Card
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-sm"
              maxWidth="max-w-sm"
              footerAlignment="center"
              dividerAfterContent
            >
              <Header>
                <Title>Static - Simple ListBox</Title>
              </Header>
              <Content>
                <ListBox
                  aria-label="Actions"
                  selectionMode="single"
                  disallowEmptySelection
                  interactive={false}
                  // onAction={key => alert(`Item with key ${key} is selected`)}
                >
                  <Item key="one">One</Item>
                  <Item key="two">Two</Item>
                  <Item key="three">Three</Item>
                </ListBox>
              </Content>
            </Card>
            <Card
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-sm"
              maxWidth="max-w-sm"
              footerAlignment="center"
              dividerAfterContent
            >
              <Header>
                <Title>Static - Simple Menu</Title>
              </Header>
              <Content>
                <Menu
                  aria-label="Actions"
                  selectionMode="single"
                  disallowEmptySelection
                  // onAction={key => alert(`Item with key ${key} is selected`)}
                >
                  <Item key="one">One</Item>
                  <Item key="two">Two</Item>
                  <Item key="three">Three</Item>
                </Menu>
              </Content>
            </Card>
            <Card
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-sm"
              maxWidth="max-w-sm"
              footerAlignment="center"
              dividerAfterContent
            >
              <Header>
                <Title>Static - Simple ListBox with sections</Title>
              </Header>
              <Content>
                <ListBox
                  aria-label="Actions"
                  selectionMode="single"
                  disallowEmptySelection
                  // onAction={key => alert(`Item with key ${key} is selected`)}
                >
                  <Section title="Section 1">
                    <Item key="section1-item1">One</Item>
                    <Item key="section1-item2">Two</Item>
                    <Item key="section1-item3">Three</Item>
                  </Section>
                  <Section title="Section 2">
                    <Item key="section2-item1">One</Item>
                    <Item key="section2-item2">Two</Item>
                    <Item key="section2-item3">Three</Item>
                  </Section>
                </ListBox>
              </Content>
            </Card>
            <Card
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-sm"
              maxWidth="max-w-sm"
              footerAlignment="center"
              dividerAfterContent
            >
              <Header>
                <Title>Static - Simple Menu with sections</Title>
              </Header>
              <Content>
                <Menu
                  aria-label="Actions"
                  selectionMode="single"
                  disallowEmptySelection
                  // onAction={key => alert(`Item with key ${key} is selected`)}
                >
                  <Section title="Section 1">
                    <Item key="section1-item1">One</Item>
                    <Item key="section1-item2">Two</Item>
                    <Item key="section1-item3">Three</Item>
                  </Section>
                  <Section title="Section 2">
                    <Item key="section2-item1">One</Item>
                    <Item key="section2-item2">Two</Item>
                    <Item key="section2-item3">Three</Item>
                  </Section>
                </Menu>
              </Content>
            </Card>
            <Card
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-sm"
              maxWidth="max-w-sm"
              footerAlignment="center"
              dividerAfterContent
            >
              <Header>
                <Title>Dynamic - Simple Menu</Title>
              </Header>
              <Content>
                <Menu
                  aria-label="Actions"
                  selectionMode="single"
                  disallowEmptySelection
                  items={tree1.items}
                  interactive={false}
                  forceItemLowBrandBackgroundAtHoverState
                  // onAction={key => alert(`Item with key ${key} is selected`)}
                >
                  {item => <Item>{item.value.label}</Item>}
                </Menu>
              </Content>
            </Card>
            <Card
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-sm"
              maxWidth="max-w-sm"
              footerAlignment="center"
              horizontalPadding="px-0"
              dividerAfterContent
            >
              <Header>
                <Title>Dynamic - Simple Menu with sections</Title>
              </Header>
              <Content>
                <Menu
                  aria-label="Actions"
                  selectionMode="single"
                  disallowEmptySelection
                  forceItemLowBrandBackgroundAtHoverState
                  itemInitialIndent={4}
                  items={tree1.items}

                  // onAction={key => alert(`Item with key ${key} is selected`)}
                >
                  {section => (
                    <Section key={section.key} title={section.value.label} items={section.children}>
                      {item => <Item key={item.key}>{item.value.label}</Item>}
                    </Section>
                  )}
                </Menu>
              </Content>
            </Card>
            <Card
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-sm"
              maxWidth="max-w-sm"
              footerAlignment="center"
              horizontalPadding="px-0"
              dividerAfterContent
            >
              <Header>
                <Title>Dynamic - Tree Menu</Title>
              </Header>
              <Content>
                <Menu
                  aria-label="Actions"
                  selectionMode="single"
                  disallowEmptySelection
                  items={tree2.items}
                  disabledKeys={["12"]}
                  itemApplyIntentOnGroup={true}
                  forceItemLowBrandBackgroundAtHoverState
                  itemInitialIndent={4}
                  groupOpacity="text-opacity-80"
                  // onSelectionChange={keys => console.log(keys)}
                  // onAction={key => alert(`Item with key ${key} is selected`)}
                >
                  {item => <Item childItems={item.children}>{item.value.label}</Item>}
                </Menu>
              </Content>
            </Card>
            <Card
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-sm"
              maxWidth="max-w-sm"
              footerAlignment="center"
              horizontalPadding="px-0"
            >
              <Header>
                <Title>Simple ListView</Title>
              </Header>
              <Content>
                <ListView
                  // interactive={false}
                  selectedItemCustomId={selectedListItemCustomId}
                  // selectedItem={selectedListItem}
                  setSelectedItem={lselectedItem => {
                    console.log(`setSelectedListItemCustomId with ${lselectedItem?.customId}`);
                    setSelectedListItemCustomId(lselectedItem?.customId);
                    setSelectedListItem(lselectedItem);
                  }}
                  forceItemLowGrayBackgroundAtHoverState
                  itemInitialIndent={4}
                  items={[
                    { label: "H+ Closure - AWS (China)", path: "", customId: "01" },
                    { label: "B2B Commerce - AWS (Paris)", path: "", customId: "02" },
                    { label: "Pulse - AWS (Ireland)", path: "", customId: "03" },
                    { label: "Promocash - GCP (Frankfurt)", path: "", customId: "04" },
                    { label: "H+ Market - GCP (Berlin)", path: "", customId: "05" },
                  ]}
                  // filter={nodes =>
                  //   Array.from(nodes).filter(
                  //     node => !!node.value && node.value.label.startsWith("P")
                  //   )
                  // }
                />
                <TextField
                  inputType="text"
                  id="ItemId"
                  name="Item Id"
                  label="Item Id"
                  labelInfo="(required)"
                  intent={IntentColor.BRAND}
                  placeholder="Enter item id"
                  intentAtDefaultState={false}
                  value={itemIdValue}
                  onChange={value => setItemIdValue(value)}
                  fill
                />
              </Content>
              <Footer>
                <Button
                  intent={IntentColor.BRAND}
                  borderRadius="rounded-lg"
                  horizontalPadding="px-6"
                  verticalPadding="py-1.5"
                  fontSize="text-sm"
                  fontWeight="font-semibold"
                  onPress={() => setSelectedListItemCustomId(itemIdValue)}
                >
                  Select
                </Button>
              </Footer>
            </Card>
            <Card
              leftMargin="ml-5"
              topMargin="mt-5"
              rightMargin="mr-5"
              boxShadow="shadow-md"
              borderRadius="rounded-sm"
              maxWidth="max-w-sm"
              footerAlignment="center"
              horizontalPadding="px-0"
            >
              <Header>
                <Title>Simple TreeView</Title>
              </Header>
              <Content>
                <TreeView
                  // interactive={false}
                  sortSections={false}
                  sortGroups={false}
                  sortItems={false}
                  selectedItemCustomId="rsrc16"
                  setSelectedItem={lselectedItem => setSelectedTreeItem(lselectedItem)}
                  itemExpandedIds={expandedTreeIds}
                  setItemExpandedIds={setExpandedTreeIds}
                  forceItemLowGrayBackgroundAtHoverState
                  itemInitialIndent={4}
                  items={[
                    {
                      group: "VIRTUAL PRIVATE CLOUD",
                      label: "Your VPCs",
                      path: "/account",
                      customId: "rsrc2",
                    },
                    {
                      group: "VIRTUAL PRIVATE CLOUD",
                      label: "Subnets",
                      path: "/dashboard",
                      customId: "rsrc3",
                    },
                    {
                      group: "VIRTUAL PRIVATE CLOUD",
                      label: "Route Tables",
                      path: "/organization",
                      customId: "rsrc4",
                    },
                    {
                      group: "VIRTUAL PRIVATE CLOUD",
                      label: "Internet Gateways",
                      path: "/about",
                      customId: "rsrc5",
                    },
                    {
                      group: "VIRTUAL PRIVATE CLOUD",
                      label: "Egress Only Internet Gateways",
                      path: "/about",
                      customId: "rsrc6",
                    },
                    {
                      group: "VIRTUAL PRIVATE CLOUD",
                      label: "DHCP Options Sets",
                      path: "",
                      customId: "rsrc7",
                    },
                    {
                      group: "VIRTUAL PRIVATE CLOUD",
                      label: "Elastic IPs",
                      path: "/",
                      customId: "rsrc8",
                    },
                    {
                      group: "VIRTUAL PRIVATE CLOUD",
                      label: "Managed Prefix",
                      path: "/",
                      customId: "rsrc9",
                    },
                    {
                      group: "VIRTUAL PRIVATE CLOUD",
                      label: "Lists",
                      path: "/about",
                      customId: "rsrc10",
                    },
                    {
                      group: "VIRTUAL PRIVATE CLOUD",
                      label: "Endpoints",
                      path: "/about",
                      customId: "rsrc11",
                    },
                    {
                      group: "VIRTUAL PRIVATE CLOUD",
                      label: "Endpoint Services",
                      path: "/about",
                      customId: "rsrc12",
                    },
                    {
                      group: "VIRTUAL PRIVATE CLOUD",
                      label: "NAT Gateways",
                      path: "/about",
                      customId: "rsrc13",
                    },
                    {
                      group: "VIRTUAL PRIVATE CLOUD",
                      label: "Peering Connections",
                      path: "/about",
                      customId: "rsrc14",
                    },
                    {
                      group: "SECURITY",
                      label: "Network ACLs",
                      path: "",
                      customId: "rsrc15",
                    },
                    {
                      group: "SECURITY",
                      label: "Security Groups",
                      path: "",
                      customId: "rsrc16",
                    },
                    {
                      group: "REACHABILITY",
                      label: "Reachability Analyzer",
                      path: "",
                      customId: "rsrc17",
                    },
                    {
                      group: "DNS FIREWALL",
                      label: "Rule Groups",
                      path: "",
                      customId: "rsrc18",
                    },
                    {
                      group: "DNS FIREWALL",
                      label: "Domain Lists",
                      path: "",
                      customId: "rsrc19",
                    },
                  ]}
                />
              </Content>
            </Card>
            <BasicLayout leftMargin="ml-5" topMargin="mt-5" rightMargin="mr-5">
              <BasicLayout fluid>
                <PopoverTrigger
                  isOpen={openMenu}
                  aria-label="Actions"
                  type="listbox"
                  menuHaveSection
                  forceItemLowGrayBackgroundAtHoverState
                  syncTriggerLabelWithSelectedItem
                  menuItems={menuItems3}
                  placement="bottom start"
                  onMenuItemAction={() => {
                    setOpenMenu(false);
                  }}
                  onClose={() => {
                    setOpenMenu(false);
                  }}
                >
                  <Button
                    intentAtDefaultState={true}
                    width="w-40"
                    fontSize="text-sm"
                    fontWeight="font-semibold"
                    horizontalPadding="px-6"
                    verticalPadding="py-1.5"
                    rightIcon={openMenu ? "caret-up" : "caret-down"}
                    onPress={() => {
                      setOpenMenu(true);
                    }}
                  >
                    Popover Trigger 1
                  </Button>
                </PopoverTrigger>
              </BasicLayout>
            </BasicLayout>
            <BasicLayout leftMargin="ml-5" topMargin="mt-5" rightMargin="mr-5">
              <BasicLayout fluid>
                <PopoverTrigger
                  isOpen={openMenu2}
                  aria-label="Actions"
                  type="listbox"
                  menuHaveSection
                  forceItemLowGrayBackgroundAtHoverState
                  syncTriggerLabelWithSelectedItem
                  menuItems={menuItems3}
                  placement="bottom start"
                  onMenuItemAction={() => {
                    setOpenMenu2(false);
                  }}
                  onClose={() => {
                    setOpenMenu2(false);
                  }}
                >
                  <Button
                    intentAtDefaultState={true}
                    width="w-40"
                    fontSize="text-sm"
                    fontWeight="font-semibold"
                    horizontalPadding="px-6"
                    verticalPadding="py-1.5"
                    rightIcon={openMenu2 ? "caret-up" : "caret-down"}
                    onPress={() => {
                      setOpenMenu2(true);
                    }}
                  >
                    Popover Trigger 2
                  </Button>
                </PopoverTrigger>
              </BasicLayout>
            </BasicLayout>
            <div className="ml-5 mt-5 mr-5 flex flex-col items-center gap-5">
              <Divider className="" orientation="horizontal" opacity={0.5} />
              <div className="flex justify-around w-full px-3">
                <div className="text-sm">First Tab</div>
                <Divider />
                <div className="text-sm">Second Tab</div>
                <Divider />
                <div className="text-sm">Third Tab</div>
              </div>
              <Divider className="px-3" orientation="horizontal" opacity={0.5} />
            </div>
            <div className="ml-5 mt-5 mr-5 min-w-0 max-w-sm border border-blueGray-600">
              Cloudem Container
            </div>
            <div className="ml-5 mt-5 mr-5">
              <div className="w-4 h-4 bg-warning-700"></div>
            </div>
            <div className="ml-5 mt-5 mr-5"></div>{" "}
          </BasicLayout>
        </>
      )}
    </div>
  );
};

export default Index;
