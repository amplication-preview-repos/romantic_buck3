import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  appointments?: AppointmentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  interestedIn?: StringNullableFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
