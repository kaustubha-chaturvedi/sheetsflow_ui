"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CopyIcon, Eye, EyeOff } from "lucide-react";


export default function SettingsDialog() {
    let [isShown, setIsShown] = useState(false);
    let [accessToken, setAccessToken] = useState("Access Token");
    const [isCopied, setIsCopied] = useState(false)
    const handleCopy = (text:string) => {
        navigator.clipboard.writeText(text)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 3000)
    }
    return (

        <Dialog>
            <DialogTrigger>
                <Button size="default" variant="ghost">Settings</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Settings</DialogTitle>
                    <DialogDescription>
                        You can copy your access token here.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <div className="flex items-center gap-2">
                            <Input
                                id="link"
                                defaultValue={accessToken}
                                readOnly
                                type={isShown ? "text" : "password"}
                            />
                            <Button size="sm" onClick={() => setIsShown(!isShown)} variant="outline">
                                {isShown ?
                                    <EyeOff className="h-4 w-4" /> :
                                    <Eye className="h-4 w-4" />
                                }
                            </Button>
                        </div>
                    </div>
                    <Button variant="outline" onClick={() => handleCopy(accessToken)}>
                        <CopyIcon className="mr-2 h-4 w-4" />
                        {isCopied ? "Copied!" : "Copy"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
