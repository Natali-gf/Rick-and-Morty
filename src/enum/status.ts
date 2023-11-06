export enum Status {
	Loading,
	Resolved,
	Rejected,
};

export enum StatusResponse {
	Informational = 100,
	Success = 200,
	Redirection = 300,
	ClientError = 400,
	ServerError = 500,
};