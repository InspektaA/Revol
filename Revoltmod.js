UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Hidden cvars", true);

var color_h = UI.GetColor("Misc", "JAVASCRIPT", "Script Items", "Hotkey Color");
var color_f = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color");
var screen_size = Global.GetScreenSize();
var pos_h = screen_size[0];
var pos_w = screen_size[1];
var pistol_cache = UI.GetValue("Rage", "PISTOL", "Targeting", "Minimum damage");
var heavy_cache = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage");
var scout_cache = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage");
var awp_cache = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage");
var auto_cache = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage");
var fa = 0;
var sa = 0;
var original_aa = true
var jitter_protect = true
var targetName = []
var lasttime = 0;
var hs_dt_protect = true

enable_mod();
modmenu();

function get_icon(a) {
    var letter = ""
    switch (a) {
        case "desert eagle":
            letter = "a"
            break
        case "dual berettas":
            letter = "b"
            break
        case "five seven":
            letter = "c"
            break
        case "glock 18":
            letter = "d"
            break
        case "ak 47":
            letter = "e"
            break
        case "aug":
            letter = "f"
            break
        case "awp":
            letter = "g"
            break
        case "famas":
            letter = "h"
            break
        case "m249":
            letter = "i"
            break
        case "g3sg1":
            letter = "j"
            break
        case "galil ar":
            letter = "k"
            break
        case "m4a4":
            letter = "l"
            break
        case "m4a1 s":
            letter = "m"
            break
        case "mac 10":
            letter = "n"
            break
        case "p2000":
            letter = "o"
            break
        case "mp5 sd":
            letter = "p"
            break
        case "ump 45":
            letter = "q"
            break
        case "xm1014":
            letter = "r"
            break
        case "pp bizon":
            letter = "s"
            break
        case "mag 7":
            letter = "t"
            break
        case "negev":
            letter = "u"
            break
        case "sawed off":
            letter = "v"
            break
        case "tec 9":
            letter = "w"
            break
        case "zeus x27":
            letter = "x"
            break
        case "p250":
            letter = "y"
            break
        case "mp7":
            letter = "z"
            break
        case "mp9":
            letter = "A"
            break
        case "nova":
            letter = "B"
            break
        case "p90":
            letter = "C"
            break
        case "scar 20":
            letter = "D"
            break
        case "sg 553":
            letter = "E"
            break
        case "ssg 08":
            letter = "F"
            break
        case "knife":
            letter = "G"
            break
        case "flashbang":
            letter = "H"
            break
        case "high explosive grenade":
            letter = "I"
            break
        case "smoke grenade":
            letter = "J"
            break
        case "molotov":
            letter = "K"
            break
        case "decoy grenade":
            letter = "L"
            break
        case "incendiary grenade":
            letter = "M"
            break
        case "c4 explosive":
            letter = "N"
            break
        case "usp s":
            letter = "P"
            break
        case "cz75 auto":
            letter = "Q"
            break
        case "r8 revolver":
            letter = "R"
            break
        case "bayonet":
            letter = "V"
            break
        case "flip knife":
            letter = "W"
            break
        case "gut knife":
            letter = "X"
            break
        case "karambit":
            letter = "Y"
            break
        case "m9 bayonet":
            letter = "Z"
            break
        case "falchion knife":
            letter = "1"
            break
        case "bowie knife":
            letter = "2"
            break
        case "butterfly knife":
            letter = "3"
            break
        case "shadow daggers":
            letter = "4"
            break
        case "ursus knife":
            letter = "5"
            break
        case "navaja knife":
            letter = "6"
            break
        case "stiletto knife":
            letter = "7"
            break
        case "skeleton knife":
            letter = "8"
            break
        case "huntsman knife":
            letter = "0"
            break
        case "talon knife":
            letter = "8"
            break
        case "classic knife":
            letter = "25"
            break
        case "paracord knife":
            letter = "Z"
            break
        case "survival knife":
            letter = "Z"
            break
        case "nomad knife":
            letter = "Z"
            break
        default:
            letter = ""
            break
    }
    return letter
}

function getHitboxName(index)
{
    var hitboxName = "";
    switch (index)
    {
        case 0:
            hitboxName = "Head";
            break;
        case 1:
            hitboxName = "Neck";
            break;
        case 2:
            hitboxName = "Pelvis";
            break;
        case 3:
            hitboxName = "Body";
            break;
        case 4:
            hitboxName = "Thorax";
            break;
        case 5:
            hitboxName = "Chest";
            break;
        case 6:
            hitboxName = "Upper chest";
            break;
        case 7:
            hitboxName = "Left thigh";
            break;
        case 8:
            hitboxName = "Right thigh";
            break;
        case 9:
            hitboxName = "Left calf";
            break;
        case 10:
            hitboxName = "Right calf";
            break;
        case 11:
            hitboxName = "Left foot";
            break;
        case 12:
            hitboxName = "Right foot";
            break;
        case 13:
            hitboxName = "Left hand";
            break;
        case 14:
            hitboxName = "Right hand";
            break;
        case 15:
            hitboxName = "Left upper arm";
            break;
        case 16:
            hitboxName = "Left forearm";
            break;
        case 17:
            hitboxName = "Right upper arm";
            break;
        case 18:
            hitboxName = "Right forearm";
            break;
        default:
            hitboxName = "Generic";
    }

    return hitboxName;
};

function ragebotLogs_player_damage() {
    ragebot_target_damage = Event.GetInt("dmg_health");
}

function ragebotLogs()
{
    
    ragebot_target = Event.GetInt("target_index");
    ragebot_target_hitbox = Event.GetInt("hitbox");
    ragebot_target_hitchance = Event.GetInt("hitchance");
    ragebot_target_safepoint = Event.GetInt("safepoint");
    ragebot_target_exploit = Event.GetInt("exploit");
    targetName = Entity.GetName(ragebot_target)
    
    Cheat.Print("\x01[ \x02Revoltmod \x01] TARGET: " + targetName + " DAMAGE: " + ragebot_target_damage.toString() +" HITBOX: " + getHitboxName(ragebot_target_hitbox) + " HC: " + ragebot_target_hitchance + " EXPLOIT: " + ragebot_target_exploit + " \n")
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Chat RageLogs", true)) {
        Cheat.PrintChat("\x01[ \x02Revoltmod \x01] TARGET: " + targetName + " DAMAGE: " + ragebot_target_damage.toString() +" HITBOX: " + getHitboxName(ragebot_target_hitbox) + " HC: " + ragebot_target_hitchance + " EXPLOIT: " + ragebot_target_exploit + " \n")
    }
}

function in_bounds(vec, x, y, x2, y2)
{
   return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}


function draw_arc(x, y, radius, start_angle, percent, thickness, color) {
    var precision = (2 * Math.PI) / 30;
    var step = Math.PI / 180;
    var inner = radius - thickness;
    var end_angle = (start_angle + percent) * step;
    var start_angle = (start_angle * Math.PI) / 180;

    for (; radius > inner; --radius) {
        for (var angle = start_angle; angle < end_angle; angle += precision) {
            var cx = Math.round(x + radius * Math.cos(angle));
            var cy = Math.round(y + radius * Math.sin(angle));

            var cx2 = Math.round(x + radius * Math.cos(angle + precision));
            var cy2 = Math.round(y + radius * Math.sin(angle + precision));

            Render.Line(cx, cy, cx2, cy2, color);
        }
    }
}

function main_dt() {
    if (!World.GetServerString()) return;

    const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tickbase X"),
        y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Tickbase Y");

    localplayer_index = Entity.GetLocalPlayer();
    localplayer_weapon = Entity.GetWeapon(localplayer_index);
    weapon_name = Entity.GetName(localplayer_weapon);
    g_Local_classname = Entity.GetClassName(localplayer_weapon);
    var nextattack = Entity.GetProp(localplayer_weapon, "CBaseCombatWeapon", "m_flNextPrimaryAttack");
    var CanShoot = false;
    if (nextattack <= Globals.Curtime()) {
        CanShoot = true;
    }

    var frames = 8 * Globals.Frametime();

    var font = Render.AddFont("Verdana", 7, 100);
    var fontbullet = Render.AddFont("bullet", 18, 100);
    if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
        var text = "DT [Revoltmod] | tickbase: 18";
        var color = [89, 119, 239, 255];
    } else if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
        var text = "DT [Revoltmod] | tickbase: 7";
        var color = [89, 119, 239, 255];
    } else {
        var text = "DT [Revoltmod] | tickbase: 0";
        var color = [89, 89, 89, 255];
    }
    var w = Render.TextSizeCustom(text, font)[0] + 8;

    Render.FilledRect(x, y, w, 2, color);
    Render.FilledRect(x, y + 2, w, 18, [17, 17, 17, 0]);
    Render.StringCustom(x + 5, y + 5, 0, text, [0, 0, 0, 180], font);
    Render.StringCustom(x + 4, y + 4, 0, text, [255, 255, 255, 255], font);

    Render.String(x + 4, y + 22, 0, get_icon(weapon_name), [255, 255, 255, 255], 5);
    if ((g_Local_classname == "CKnife" || g_Local_classname == "CWeaponSSG08" || g_Local_classname == "CWeaponAWP" || weapon_name == "r8 revolver" || g_Local_classname == "CHEGrenade" || g_Local_classname == "CMolotovGrenade" || g_Local_classname == "CIncendiaryGrenade" || g_Local_classname == "CFlashbang" || g_Local_classname == "CSmokeGrenade" || g_Local_classname == "CDecoyGrenade" || g_Local_classname == "CWeaponTaser" || g_Local_classname == "CC4")) {
        //return
    } else {
        if (CanShoot) {
            fa = Math.min(fa + frames, 1);
            Render.StringCustom(x + 10 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "A", [255, 255, 255, fa * 255], fontbullet);
        } else {
            fa = 0;
        }
        if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Doubletap")) {
            sa = Math.min(sa + frames, 1);
            Render.StringCustom(x + 30 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "A", [255, 255, 255, sa * 255], fontbullet);
        } else {
            sa = 0;
        }
    }


    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x, y, x + w, y + 30)) {
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Tickbase X", mouse_pos[0] - w / 2);
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Tickbase Y", mouse_pos[1] - 20);
        }
    }
}

function main_aa() {
    if (!World.GetServerString()) return;

    const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Antiaim X"),
        y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Antiaim Y");

    var font = Render.AddFont("Verdana", 7, 100);
    var RealYaw = Local.GetRealYaw();
    var FakeYaw = Local.GetFakeYaw();
    var delta = Math.min(Math.abs(RealYaw - FakeYaw) / 2, 60).toFixed(1);
    var safety = Math.min(Math.round(1.7 * Math.abs(delta)), 100);
    if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
        var side = "<";
    } else {
        var side = ">";
    }
    var text = "FAKE (" + delta.toString() + "  ) | safety: " + safety.toString() + "% | side: " + side;
    var w = Render.TextSizeCustom(text, font)[0] + 8;
    var x3 = x - w - 3;
    color_f = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color");

    Render.FilledRect(x3, y + 2, 2, 18, [ color_f[0], color_f[1], color_f[2], 255 ]);
    Render.StringCustom(x + 5 - w, y + 5, 0, text, [0, 0, 0, 180], font);
    Render.StringCustom(x + 4 - w, y + 4, 0, text, [255, 255, 255, 255], font);
    Render.Circle(x + 5 - w + Render.TextSizeCustom("FAKE (" + delta.toString(), font)[0], y + 8, 1, [255, 255, 255, 255]);
    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x - w, y, x + w, y + 30)) {
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Antiaim X", mouse_pos[0] + w / 2);
            UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Antiaim Y", mouse_pos[1] - 20);
        }
    }
}

function keybinds()
{   
    var hs_dt_control_mode = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Disable HS, when DT on")
    if(!World.GetServerString()) return;


    const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Keybinds X"),
    y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Keybinds Y");

     var h = [];
     const fontpixel = Render.AddFont( "Verdana", 7, 100);

     if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Minimum damage override")) {
       h.push("Override mindmg")
	   }
     if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
       h.push("Slow Walk")
     }
     if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
       h.push("Fake Duck")
     }
     if (UI.IsHotkeyActive("Misc", "General", "Movement", "Auto peek")) {
       h.push("Auto Peek")
     }
     if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
       h.push("Anti-Aim invert")
     }
     if (UI.IsHotkeyActive("Rage", "General", "General", "Force safe point")) {
       h.push("Safe point")
     }
     if (UI.IsHotkeyActive("Rage", "General", "General", "Force body aim")) {
       h.push("Body aim")
     }
     if (UI.IsHotkeyActive("Rage", "Exploits", "Double tap")) {
       h.push("Double tap")
     }
     if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Desync on shot")) {
       h.push("On shot anti-aim")
     }
     if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
       h.push("Hide shots")
     }
     if (UI.IsHotkeyActive("Legit", "GENERAL", "Triggerbot", "Enabled")) {
       h.push("Triggerbot")
     }

     const rainbow = [
         Math.floor(Math.sin(Global.Realtime() * 2) * 127 + 128),
         Math.floor(Math.sin(Global.Realtime() * 2 + 2) * 127 + 128),
         Math.floor(Math.sin(Global.Realtime() * 2 + 4) * 127 + 128),
         255
     ];
     
     color_h = UI.GetColor("Misc", "JAVASCRIPT", "Script Items", "Hotkey Color")
     Render.FilledRect(x, y, 170, 20, [15, 15, 15, 130]);
     Render.StringCustom(x + 60, y + 4, 0, "Hotkeys", [ 255, 255, 255, 255], fontpixel);
     Render.FilledRect(x, y, 170, 2, [color_h[0], color_h[1], color_h[2], 255]);
     Render.FilledRect(x, y + 20, 170, 20 + 15 * (h.length - 1), [15, 15, 15, 20]);
     for (i = 0; i < h.length; i++)
     {
        Render.StringCustom(x + 5, y + 23 + 15 * i, 0, h[i], [255, 255, 255, 255], fontpixel);
        Render.StringCustom(x + 123, y + 23 + 15 * i, 0, "[toggled]", [255, 255, 255, 255], fontpixel);
     }

     if (Global.IsKeyPressed(1)) {
         const mouse_pos = Global.GetCursorPosition();
         if (in_bounds(mouse_pos, x, y, x + 200, y + 30)) {
          if (UI.IsMenuOpen( ) == false)
            return;
             UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Keybinds X", mouse_pos[0] - 100);
             UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Keybinds Y", mouse_pos[1] - 20);
         }
     }

};

function setValue(cat, value)
{
    UI.SetValue("Rage", cat.toUpperCase(), "Targeting", "Minimum damage", value)
}

function isPistol(name)
{
    if (name == "dual berretas" || name == "five seven" || name == "glock 18" || name == "tec 9" || name == "p250" || name == "usp s" || name == "cz75 auto" )
	{
		return true
	}
}

function isHeavyPistol(name)
{
    if (name == "r8 revolver" || name == "desert eagle")
    {
        return true
    }
}

function isAutoSniper(name)
{
    if(name == "scar 20" || weapon_name == "g3sg1")
    {
        return true
    }
}

function isDoubleTapActive()
{
	var isCheckboxActive = UI.GetValue("Rage", "Exploits", "Doubletap");
	var isKeyActive = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
	
	return isCheckboxActive && isKeyActive;
}

function rev_indicators() 
{
    if(!World.GetServerString()) 
    {
        return
    }

    var lby_normal = UI.GetValue("Anti-Aim", "Fake Angles", "LBY mode") == "0";
    var lby_opposite = UI.GetValue("Anti-Aim", "Fake Angles", "LBY mode") == "1";
    var lby_sway = UI.GetValue("Anti-Aim", "Fake Angles", "LBY mode") == "2";
    var font = Render.AddFont("Verdana", 7, 100);
    var exploit_doubletap = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap");
    var exploit_hideshot = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Hide shots");
    var y_add = 0;
    var hs_dt_control_mode = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Disable HS, when DT on");
    
    if (lby_normal) 
    {
         Render.StringCustom( pos_h / 2 + 15, pos_w / 2 + 60 , 0, "NORMAL", [177, 151, 255, 200], font );
    } 
    else if (lby_opposite)
    {
        Render.StringCustom( pos_h / 2 + 15, pos_w / 2 + 60 , 0, "OPPOSITE", [177, 151, 255, 200], font );
    } 
    else if (lby_sway) 
    {
        Render.StringCustom( pos_h / 2 + 15, pos_w / 2 + 60 , 0, "SWAY", [177, 151, 255, 200], font );
    }
    
    if (UI.IsHotkeyActive("Anti-Aim", "Fake Angles", "Inverter")) 
    {
        Render.StringCustom( pos_h / 2 + 15, pos_w / 2 + 73 , 0, "LEFT", [177, 161, 255, 200], font );
    }
    else 
    {
        Render.StringCustom( pos_h / 2 + 15, pos_w / 2 + 73 , 0, "RIGHT", [177, 161, 255, 200], font );
    }
    
    if (exploit_doubletap) 
    {
        Render.StringCustom( pos_h / 2 + 15, pos_w / 2 + 86 , 0, "DOUBLETAP", [15, 177, 15, 200], font );
    } 
    else 
    {
        Render.StringCustom( pos_h / 2 + 15, pos_w / 2 + 86 , 0, "DOUBLETAP", [177, 15, 15, 200], font );
    }
    
    if (exploit_hideshot && hs_dt_control_mode == false) 
    {
        y_add = y_add + 13
        Render.StringCustom( pos_h / 2 + 15, pos_w / 2 + 86 + y_add , 0, "ONSHOT", [255, 255, 255, 200], font );
    }

    if (hs_dt_control_mode == true) 
    {
        y_add = y_add + 13
        Render.StringCustom( pos_h / 2 + 15, pos_w / 2 + 86 + y_add , 0, "HS CONTROL", [100, 100, 255, 200], font );
    }
}

function player_connect(){
    lastPressed = Global.Tickcount();
    oldTick = Global.Tickcount();
}

function watermark() {
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Watermark" , false);
    if(!World.GetServerString())
    return;

    var color_wm = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark Color");
    var tickrate = Globals.Tickrate().toString();
    var ping = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString();
    var username = Cheat.GetUsername().toString();
    var today = new Date();
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
	var seconds1 = today.getSeconds();
    var hours = hours1 <= 9 ? "0"+hours1+":" : hours1+":";
    var minutes = minutes1 <= 9 ? "0" + minutes1+":" : minutes1+":";
	var seconds = seconds1 <= 9 ? "0" + seconds1 : seconds1;
    color_wm = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Watermark Color");

	var font = Render.AddFont("Verdana", 7, 400);
	var text = "Onetap [Revoltmod] | " + username + " | delay: " + ping + "ms | " + tickrate + "tick | " + hours + minutes + seconds;
	
	var w = Render.TextSizeCustom(text, font)[0] + 8;
	var x = Global.GetScreenSize()[0];

	x = x - w - 10;

	Render.FilledRect(x, 10, w, 2, [ color_wm[0], color_wm[1], color_wm[2], 255 ]);
	Render.FilledRect(x, 12, w, 18, [ 17, 17, 17, 45 ]);
	Render.StringCustom(x+4, 10 + 4, 0, text, [ 255, 255, 255, 255 ], font);
}

function dt_recharger() 
{
    func_status = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "DT Recharger");
    if (func_status == true) 
    {
        DT_Charge = Exploit.GetCharge()
        if(DT_Charge < 0.1) 
        {
            if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) 
            {
                Exploit.Exploit.Recharge();
            }
        }
    }
}

function low_delta() {
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Low delta", true)) {
        slow_walk_status = UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")
        invert_aa = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")
        if (slow_walk_status == true) {
            if (invert_aa == true) {
                if (jitter_protect) {
                    var jitter_backup = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset");
                    var yaw_backup = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");
                    var adir_backup = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction");
                    jitter_protect = false
                }
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 10);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", false);
                AntiAim.SetOverride(1);
                AntiAim.SetFakeOffset(0);
                AntiAim.SetRealOffset(26);
            } else {
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 10);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", false);
                AntiAim.SetOverride(1);
                AntiAim.SetFakeOffset(0);
                AntiAim.SetRealOffset(-20); 
            }
        } else {
            if (!jitter_protect) {
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", jitter_backup);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw_backup);
                UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", adir_backup);
                jitter_protect = true
            }
            AntiAim.SetOverride(0);
        }
    }
}

function aspectration() {
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio", true) && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Activate Revoltmod", true)) {
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio Value", true);
        ratio = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio Value").toString();
        switch (Global.FrameStage()) {
            case 5: {
                Global.ExecuteCommand( "r_aspectratio " + ratio );
                break;
            }
            default: break;
        } 
    } else {
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio Value", false);
    }
}

function enable_mod() {
    UI.AddCheckbox("Activate Revoltmod");
}

function legit_aa()
{
    if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Legit AA Key"))
    {
        if (original_aa)
        {
            restrictions_cache = UI.GetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions");
            hiderealangle_cache = UI.GetValue ("Anti-Aim", "Fake angles", "Hide real angle");
            yaw_offset_cache = UI.GetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset");
            jitter_offset_cache = UI.GetValue ("Anti-Aim", "Rage Anti-Aim", "Jitter offset");
            pitch_cache = UI.GetValue ("Anti-Aim", "Extra", "Pitch");
            autodir_cache = UI.GetValue ("Anti-Aim", "Rage Anti-Aim", "Auto direction");
            original_aa = false;
        }
        UI.SetValue ("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0);
        UI.SetValue ("Anti-Aim", "Fake angles", "Hide real angle", true);
        UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180);
        UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 0);
        UI.SetValue ("Anti-Aim", "Extra", "Pitch", 0);
        UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Auto direction", false);
    }
    else
    {
        if (!original_aa)
        {
            UI.SetValue ("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", restrictions_cache);
            UI.SetValue ("Anti-Aim", "Fake angles", "Hide real angle", hiderealangle_cache);
            UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw_offset_cache);
            UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Jitter offset", jitter_offset_cache);
            UI.SetValue ("Anti-Aim", "Extra", "Pitch", pitch_cache);
            UI.SetValue ("Anti-Aim", "Rage Anti-Aim", "Auto direction", autodir_cache);
            original_aa = true;
        }
    }
}

function mod_clantag() {
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Clantag")) {
        var time = parseInt((Globals.Curtime() * 4))
        if (time != lasttime)
        {
            if(UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Clantag", true))
                {
                switch((time) % 36)
                {
                    case 1: { Local.SetClanTag(" "); break; }
                    case 2: { Local.SetClanTag(" | "); break; }
                    case 3: { Local.SetClanTag(" R"); break; }
                    case 4: { Local.SetClanTag(" R|-"); break; }
                    case 5: { Local.SetClanTag(" RE"); break; }
                    case 6: { Local.SetClanTag(" Re"); break; }
                    case 7: { Local.SetClanTag(" Re\\// "); break; }
                    case 8: { Local.SetClanTag(" Rev"); break; }
                    case 9: { Local.SetClanTag(" Rev0"); break; }
                    case 10: { Local.SetClanTag(" Revo"); break; }
                    case 11: { Local.SetClanTag(" Revo|_"); break; }
                    case 12: { Local.SetClanTag(" Revol"); break; }
                    case 13: { Local.SetClanTag(" Revol! "); break; }
                    case 14: { Local.SetClanTag(" Revolt"); break; }
                    case 15: { Local.SetClanTag(" Revolt# "); break; }
                    case 16: { Local.SetClanTag(" RevoltM"); break; }
                    case 17: { Local.SetClanTag(" RevoltM0"); break; }
                    case 18: { Local.SetClanTag(" RevoltMo"); break; }
                    case 19: { Local.SetClanTag(" RevoltMoo|"); break; }
                    case 20: { Local.SetClanTag(" RevoltMod"); break; }
                    case 21: { Local.SetClanTag(" RevoltMod"); break; }
                    case 22: { Local.SetClanTag(" RevoltMod"); break; }
                    case 23: { Local.SetClanTag(" RevoltMoo|"); break; }
                    case 24: { Local.SetClanTag(" RevoltM0"); break; }
                    case 25: { Local.SetClanTag(" Revolt|{}| "); break; }
                    case 26: { Local.SetClanTag(" Revolt"); break; }
                    case 27: { Local.SetClanTag(" Revol! "); break; }
                    case 28: { Local.SetClanTag(" Revo|_"); break; }
                    case 29: { Local.SetClanTag(" Rev0"); break; }
                    case 30: { Local.SetClanTag(" Re\\// "); break; }
                    case 31: { Local.SetClanTag(" RE"); break; }
                    case 32: { Local.SetClanTag(" R|-"); break; }
                    case 33: { Local.SetClanTag(" R"); break; }
                    case 34: { Local.SetClanTag(" | "); break; }
                    case 35: { Local.SetClanTag(" "); break; }
                }
            } else {
                Local.SetClanTag("  ");
            }
        }
        lasttime = time;
    }
}

function hs_dt_control() {
    DT_Active = UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Disable HS, when DT on", true)) {
        if (DT_Active) {
            if (hs_dt_protect) {
                hideshot_backup = UI.GetValue("Rage", "GENERAL", "Exploits", "Hide shots")
                hs_dt_protect = false
            }
            UI.SetValue("Rage", "GENERAL", "Exploits", "Hide shots", false)
        }
        if (!DT_Active) {
            if (!hs_dt_protect) {
                UI.SetValue("Rage", "GENERAL", "Exploits", "Hide shots", hideshot_backup)
                hs_dt_protect = true
            }
        }
    }
}

function togler() {
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Activate Revoltmod", true)) {
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Watermark Color", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Tickbase X", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Tickbase Y", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Antiaim X", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Antiaim Y", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Fake Color", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Keybinds X", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Keybinds Y", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Hotkey Color", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Legit AA Key", true ); 
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Safe AWP", true );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio", true );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Disable HS, when DT on", true); 
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "DT Recharger", true); 
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Chat RageLogs", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Clantag", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Minimum damage override", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Pistol Mindmg", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Heavy Pistol Mindmg", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Scout Mindmg", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "AWP Mindmg", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Auto Mindmg", true);
    } else {
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Watermark Color", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Tickbase X", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Tickbase Y", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Antiaim X", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Antiaim Y", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Fake Color", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Keybinds X", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Keybinds Y", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Hotkey Color", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Legit AA Key", false); 
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Safe AWP", false );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Low delta", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio", false );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio Value", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Disable HS, when DT on", false); 
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "DT Recharger", false); 
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Chat RageLogs", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Clantag", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Minimum damage override", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Pistol Mindmg", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Heavy Pistol Mindmg", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Scout Mindmg", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "AWP Mindmg", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Auto Mindmg", false);
    }
}

function modmenu() {
    UI.AddColorPicker("Watermark Color");
    UI.AddSliderInt("Tickbase X", 0, Global.GetScreenSize()[0]);
    UI.AddSliderInt("Tickbase Y", 0, Global.GetScreenSize()[1]);
    UI.AddSliderInt("Antiaim X", 0, Global.GetScreenSize()[0]);
    UI.AddSliderInt("Antiaim Y", 0, Global.GetScreenSize()[1]);
    UI.AddColorPicker("Fake Color");
    UI.AddSliderInt("Keybinds X", 0, Global.GetScreenSize()[0]);
    UI.AddSliderInt("Keybinds Y", 0, Global.GetScreenSize()[1]);
    UI.AddColorPicker("Hotkey Color");
    UI.AddHotkey("Legit AA Key");
    UI.AddCheckbox("Safe AWP");
    UI.AddCheckbox("Low delta");
    UI.AddCheckbox( "Aspect Ratio");
    UI.AddSliderFloat("Aspect Ratio Value", 0, 5);
    UI.AddCheckbox("Disable HS, when DT on");
    UI.AddCheckbox("DT Recharger"); 
    UI.AddCheckbox("Chat RageLogs");
    UI.AddCheckbox("Clantag");
    UI.AddHotkey("Minimum damage override");
    UI.AddSliderInt("Pistol Mindmg", 0, 130);
    UI.AddSliderInt("Heavy Pistol Mindmg", 0, 130);
    UI.AddSliderInt("Scout Mindmg", 0, 130);
    UI.AddSliderInt("AWP Mindmg", 0, 130);
    UI.AddSliderInt("Auto Mindmg", 0, 130);
    UI.SetValue("Safe AWP", false);
    UI.SetValue("Aspect Ratio", false);
    UI.SetValue("DT Recharger", false);
    UI.SetValue("ChatRagelogs", false);
}

Cheat.RegisterCallback("CreateMove", "hs_dt_control")
Cheat.RegisterCallback("Draw", "mod_clantag");
Cheat.RegisterCallback("CreateMove", "low_delta");
Cheat.RegisterCallback("CreateMove", "legit_aa");
Cheat.RegisterCallback("Draw", "togler");
Cheat.RegisterCallback("FrameStageNotify", "aspectration");
Cheat.RegisterCallback("Draw", "main_dt");
Cheat.RegisterCallback("Draw", "keybinds");
Cheat.RegisterCallback("Draw", "watermark");
Cheat.RegisterCallback("Draw", "main_aa");
Cheat.RegisterCallback("player_hurt", "ragebotLogs_player_damage");
Cheat.RegisterCallback("ragebot_fire", "ragebotLogs");
Cheat.RegisterCallback("Draw", "rev_indicators");
Cheat.RegisterCallback("player_connect_full", "player_connect");
Cheat.RegisterCallback("CreateMove", "dt_recharger");

