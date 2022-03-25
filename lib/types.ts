export type Status = {
	cores: number,
	cpuUsage: number,
	ramUsage: number,
	activeRam: number,
	totalRam: number,
	gpuUsage: number,
	vramUsage: number,
	vms: {
		Name: string,
		State: number,
		CPUUsage: number,
		ProcessorCount: number,
		uptime: string,
		ram: number,
		ramUsage: number,
		activeRam: number,
		totalRam: number,
	}[]
}

export type Command = 'shutdownHost' | 'suspendHost' | 'restartHost' | 'restartHostParsec' | 'start' | 'stop'
