export type TimeType = {
	secs?: number;
	minutes?: number;
	hours?: number;
	days?: number;
	years?: number;
};

const initialTime: Required<TimeType> = {
	secs: 0,
	minutes: 0,
	hours: 0,
	days: 0,
	years: 0,
};

const A_SEC_OF_MINUTE: number = 60;
const A_MINUTES_OF_HOUR: number = 60;
const A_HOUR_OF_DAY: number = 24;
const A_DAY_OF_YEAR: number = 365;

export default function formatTime(time: number): Required<TimeType> {
	const formattedTime = initialTime;

	const A_SEC_OF_YEAR: number =
		A_SEC_OF_MINUTE * A_MINUTES_OF_HOUR * A_HOUR_OF_DAY * A_DAY_OF_YEAR;

	const A_SEC_OF_DAY: number =
		A_SEC_OF_MINUTE * A_MINUTES_OF_HOUR * A_HOUR_OF_DAY;

	const A_SEC_OF_HOUR: number = A_SEC_OF_MINUTE * A_MINUTES_OF_HOUR;

	const years: number = Math.floor(time / A_SEC_OF_YEAR);
	years > 0 && (formattedTime.years = years);

	const days: number = Math.floor(
		(time %= (years || 1) * A_SEC_OF_YEAR) / A_SEC_OF_DAY
	);
	days > 0 && (formattedTime.days = days);

	const hours: number = Math.floor(
		(time %= (days || 1) * A_SEC_OF_DAY) / A_SEC_OF_HOUR
	);
	hours > 0 && (formattedTime.hours = hours);

	const minutes: number = Math.floor(
		(time %= (hours || 1) * A_SEC_OF_HOUR) / A_SEC_OF_MINUTE
	);
	minutes > 0 && (formattedTime.minutes = minutes);

	const secs = (time %= minutes * A_SEC_OF_MINUTE);
	secs > 0 && (formattedTime.secs = secs);
	return formattedTime;
}
