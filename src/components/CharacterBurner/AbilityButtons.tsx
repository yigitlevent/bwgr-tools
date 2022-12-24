import Button from "@mui/material/Button";


type OnClickFunction<T> = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, statName: T, change: 1 | -1) => void;
type OnClickFunction5<T> = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, statName: T, change: 5 | -5) => void;

const Style = { minWidth: "30px", width: "30px", display: "inline-block", marginRight: 1 };

export function StatButton({ name, value, onClick, onContext }: { name: StatsList; value: number | ShadesListLimited; onClick: OnClickFunction<StatsList>; onContext: OnClickFunction<StatsList>; }): JSX.Element {
	return <Button size="small" variant="outlined" sx={Style} onClick={(e) => onClick(e, name, 1)} onContextMenu={(e) => onContext(e, name, -1)}>{value}</Button>;
}

export function AttributeButton({ name, value, disabled, onClick, onContext }: { name: AttributesList; value: number | ShadesList; disabled?: boolean; onClick?: OnClickFunction5<AttributesList>; onContext?: OnClickFunction5<AttributesList>; }): JSX.Element {
	return <Button size="small" variant="outlined" sx={Style} disabled={disabled} onClick={(e) => onClick ? onClick(e, name, 5) : undefined} onContextMenu={(e) => onContext ? onContext(e, name, -5) : undefined}>{value}</Button>;
}

export function SkillButton({ name, value, disabled, onClick, onContext }: { name: string; value: number | ShadesListLimited; disabled?: boolean; onClick?: OnClickFunction<string>; onContext?: OnClickFunction<string>; }): JSX.Element {
	return <Button size="small" variant="outlined" sx={Style} disabled={disabled} onClick={(e) => onClick ? onClick(e, name, 1) : {}} onContextMenu={(e) => onContext ? onContext(e, name, -1) : {}}>{value}</Button>;
}
