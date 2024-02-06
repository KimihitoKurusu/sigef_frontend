interface ElectionProps {
    name: string,
    location: string,
    location_id: number,
    council_size: number,
    candidate_size: number
}

interface CustomCardProps {
    title: string,
    description: string[] | object
}

export type { ElectionProps, CustomCardProps }