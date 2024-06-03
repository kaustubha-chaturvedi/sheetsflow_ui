"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface AddSheetDialogProps {
  sheet: { name: string; id: string };
  buttonText: string;
  buttonVariant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
  buttonSize: "default" | "sm" | "lg" | "icon";
}


export function AddSheetDialog({ sheet, buttonText, buttonVariant, buttonSize }: AddSheetDialogProps) {
    let [sheetId, setSheetId] = useState(sheet.id);
    let [sheetName, setSheetName] = useState(sheet.name);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={buttonVariant} size={buttonSize}>{buttonText}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a new sheet</DialogTitle>
                    <DialogDescription>
                        Add a new sheet to your collection.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="sheet-id">Sheet ID</Label>
                        <Input
                            id="sheet-id"
                            value={sheetId}
                            onChange={(e) => setSheetId(e.currentTarget.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="sheet-name">Worksheet name</Label>
                        <Input
                            id="sheet-name"
                            value={sheetName}
                            onChange={(e) => setSheetName(e.currentTarget.value)}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="default">Add sheet</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}