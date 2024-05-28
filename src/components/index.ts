import MySider from '@/components/base/Sider/MySider'
import MyHeader from '@/components/base/Header/Header'
import PageTitle from './custom-components/PageTitle/PageTitle'
import ElectionForm from './Election/ElectionForm'
import CustomSelect from './custom-components/CustomSelect/CustomSelect'
import CustomSwitch from './base/custom-inputs/CustomSwitch/CustomSwitch'
import CustomDatePicker from './base/custom-inputs/CustomDatePicker/CustomDatePicker'
import CustomInputNumber from './base/custom-inputs/CustomInputNumber/CustomInputNumber'
import CustomBreadcrumb from '@/components/base/Header/CustomBreadcrumb/CustomBreadcrumb'
import CustomNotificationBadge from '@/components/base/Header/CustomNotificationBadge/CustomNotificationBadge'
import CustomAutoCompleteInput from '@/components/base/custom-inputs/customAutoCompleteInput/CustomAutocompleteInput'
import SearchProfileNotificationsHeader from '@/components/base/Header/SearchProfileNotificationsHeader/SearchProfileNotificationsHeader'

import type {
	SelectOptionsProps,
	CustomSelectProps,
} from './custom-components/CustomSelect/CustomSelect'

export {
	MySider,
	MyHeader,
	PageTitle,
	CustomSelect,
	CustomSwitch,
	ElectionForm,
	CustomDatePicker,
	CustomBreadcrumb,
	CustomInputNumber,
	CustomAutoCompleteInput,
	CustomNotificationBadge,
	SearchProfileNotificationsHeader,
}

export type { SelectOptionsProps, CustomSelectProps }
