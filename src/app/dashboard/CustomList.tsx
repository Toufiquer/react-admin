/*
|-----------------------------------------
| setting up CustomList for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import {
  CreateButton,
  DatagridConfigurable,
  ExportButton,
  FilterButton,
  List,
  SelectColumnsButton,
  TopToolbar,
  SearchInput,
  Datagrid,
  TextField,
  TextInput,
  Pagination,
} from "react-admin";
const PostPagination = () => (
  <Pagination
    rowsPerPageOptions={[2, 5, 10, 25, 50, 100]}
    className={`bg-[#363B7B] text-slate-200 rounded-b-lg py-8`}
  />
);

import { globalStyle } from "./style";

const ListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const postFilters = [
  <SearchInput source="q" alwaysOn />,
  <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

const CustomList = () => {
  return (
    <List
      resource="users"
      pagination={<PostPagination />}
      sx={{
        "svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiSelect-icon.MuiTablePagination-selectIcon.MuiSelect-iconStandard.css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon":
          { ...globalStyle.text_color }, /// pagination icon
        ".MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.MuiTablePagination-toolbar.css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar":
          { ...globalStyle.text_color }, /// pagination
        ".MuiInputBase-root.MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.MuiInputBase-hiddenLabel.css-1y6feam-MuiInputBase-root-MuiFilledInput-root":
          {
            ...globalStyle.background_dark,
            ...globalStyle.text_color,
            borderBottom: "1px solid white",
            width: " 100%",
          }, // search input
        ".css-lxhw8h-MuiFormControl-root-MuiTextField-root-RaResettableTextField-root-RaSearchInput-root .RaResettableTextField-visibleClearIcon":
          {
            ...globalStyle.background_dark,
            ...globalStyle.text_color,
          }, //search icon
        "svg.MuiSvgIcon-root.MuiSvgIcon-colorDisabled.MuiSvgIcon-fontSizeMedium.css-1db085k-MuiSvgIcon-root":
          {
            ...globalStyle.background_dark,
            ...globalStyle.text_color,
          }, //search icon
        "& .RaList-actions": {
          ...globalStyle.p8,
          ...globalStyle.background_dark,
        },
        "& .RaList-content": {
          ...globalStyle.background_light,
        },
      }}
      actions={<ListActions />}
      filters={postFilters}
    >
      {/* <Datagrid> */}
      <Datagrid
        rowClick="show"
        sx={{
          "& .RaDatagrid-root": {
            ...globalStyle.text_color,
          },
          "& .RaDatagrid-rowCell": {
            ...globalStyle.py12,
            ...globalStyle.border_color,
            ...globalStyle.background_light,
          }, // each row cell
          "& .MuiCheckbox-root": {
            ...globalStyle.border_color,
            ...globalStyle.text_color_dark,
            ...globalStyle.background_light,
          }, // active header (checkbox)
          "span.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.PrivateSwitchBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiCheckbox-sizeMedium.select-all.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root":
            {
              ...globalStyle.background_banner,
              ...globalStyle.py8,
            }, // title bar
          "td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-sizeSmall.column-id.RaDatagrid-rowCell.css-dsuxgy-MuiTableCell-root":
            {
              ...globalStyle.py26,
            },
          "& .RaDatagrid-tableWrapper .Mui-active": {
            ...globalStyle.background_banner,
            ...globalStyle.text_color_dark,
            ...globalStyle.font_bold,
            ...globalStyle.font_size16,
          }, // active header (Text)
          "& .RaDatagrid-tableWrapper .css-1qgma8u-MuiButtonBase-root-MuiTableSortLabel-root:hover":
            {
              ...globalStyle.text_color,
              ...globalStyle.font_bold,
              ...globalStyle.font_size16,
            }, // active header (Text:hover)
          "& .RaDatagrid-tableWrapper .Mui-active .MuiTableSortLabel-icon": {
            ...globalStyle.background_banner,
            ...globalStyle.text_color_dark,
          }, // active header (Icon)
          "td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-paddingCheckbox.MuiTableCell-sizeSmall.css-2u8re1-MuiTableCell-root":
            {
              ...globalStyle.border_color,
              ...globalStyle.background_light,
            }, // icon (Checkbox)
          "& .RaDatagrid-headerCell": {
            ...globalStyle.background_banner,
            ...globalStyle.text_color_dark,
            ...globalStyle.font_size16,
          },
        }}
      >
        <TextField color={globalStyle.text_color_dark} source="id" />
        <TextField source="name" color={globalStyle.text_color_dark} />
        <TextField source="username" color={globalStyle.text_color_dark} />
        <TextField source="email" color={globalStyle.text_color_dark} />
        <TextField
          source="address.street"
          color={globalStyle.text_color_dark}
        />
        <TextField source="phone" color={globalStyle.text_color_dark} />
        <TextField source="website" color={globalStyle.text_color_dark} />
        <TextField source="company.name" color={globalStyle.text_color_dark} />
      </Datagrid>
    </List>
  );
};
export default CustomList;
