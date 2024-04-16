export type PersonType = {
	ci: string,
	name: string,
	last_name: string,
	faculty_id: number
}

export type AuthType = {
	token: string
	refresh: string
	user_id: number
	username: string
}

export type ElectionType = {
	id: number,
	type: string,
	location_id: number,
	council_size: number,
	voting_date: Date,
	is_active: boolean
}

export type CandidateType = {
	person: PersonType,
	election_id: number,
    biography: string,
    who_added: string,
    staff_votes: number,
    president_votes: number,
    position: string
}

export type CommitteeType = {
person: PersonType,
username: string,
is_staff: boolean,
is_superuser: boolean,
election_id: number
}

export type InstitutionType = {
	id: number,
	name: string
}

export type CampusType = {
	id: number,
	name: string,
	institution_id: number
}

export type FacultyType = {
	id: number,
	name: string,
	campus_id: number
}

export type ElectorRegistryType = {
	id: number,
	ci: string,
	election_id: number
}