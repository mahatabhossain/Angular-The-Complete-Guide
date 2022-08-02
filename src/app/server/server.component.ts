import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = "offline";

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "Test server";
  serverCreated = false;
  servers = ["Testserver", "Testserver 2"];
  showSecret = false;
  log: any[] = [];

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
    this.serverStatus = Math.random() > 0.5 ? "Online" : "offline";
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = "Server was created! Name is" + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
  // Assignment
  userName = "";
  resetUserName() {
    this.userName = "";
  }
}
