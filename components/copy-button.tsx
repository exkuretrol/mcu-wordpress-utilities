import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export const CopyButton = ({value}) => {
    const handleCopy = (value: string) => {
        navigator.clipboard.writeText(value)
    }
    
    return (
        <Button variant="outline" onClick={e => handleCopy(value)}>
            <Icons.copy />
        </Button>
    )
}
