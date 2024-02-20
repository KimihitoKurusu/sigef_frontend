type PersonType = {
	ci: string,
	name: string,
	last_name: string,
	faculty_id: number
}

type UserType = {
	token: string
	refresh: string
	user_id: number
	username: string
}

type ElectionType = {
	id: number,
	type: string,
	location_id: number,
	council_size: number,
	voting_date: Date,
	is_active: boolean
}

type CandidateType = {
	person: PersonType,
	election_id: number,
    biography: string,
    who_added: string,
    staff_votes: number,
    president_votes: number,
    position: string
}

export type {
	UserType,
	ElectionType,
	CandidateType
}