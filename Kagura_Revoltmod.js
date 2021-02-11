
enable_mod();
modmenu();

var color_h = UI.GetColor("Misc", "JAVASCRIPT", "Script Items", "Hotkey Color");
var color_f = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Fake Color");
var screen_size = Global.GetScreenSize();
var pistol_cache = UI.GetValue("Rage", "PISTOL", "Targeting", "Minimum damage");
var heavy_cache = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage");
var scout_cache = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage");
var awp_cache = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage");
var auto_cache = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage");
var isLeftActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Left Hotkey" );
var isRightActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Right Hotkey" );
var isBackwardsActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Backwards Hotkey" );
var isForwardActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Forward Hotkey" );
var isInverted; 
var drawLeft = 0; drawHideReal = 1;
var drawRight = 0, drawBack = 0;
var leftWasPressed = false; var rightWasPressed = false; var backWasPressed = false; var upWasPressed = false;
var restore_values = false
var jump = false
var prefer_safe_backup = false
var oldTick = 0
var lastPressed = 0
var isHideRealActive = false
var fa = 0;
var sa = 0;
var DT_Charge 

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

function ragebotLogs()
{
    
    ragebot_target = Event.GetInt("target_index");
    ragebot_target_hitbox = Event.GetInt("hitbox");
    ragebot_target_hitchance = Event.GetInt("hitchance");
    ragebot_target_safepoint = Event.GetInt("safepoint");
    ragebot_target_exploit = Event.GetInt("exploit");
    targetName = Entity.GetName(ragebot_target);
    
    var log_tab = "\x01[ \x02Revoltmod \x01] TARGET: " + targetName + " HITBOX: " + getHitboxName(ragebot_target_hitbox) + " HC: " + ragebot_target_hitchance + " SAFEPOINT: " + ragebot_target_safepoint + " EXPLOIT: " + ragebot_target_exploit + " \n"
    Cheat.Print(log_tab)
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Chat RageLogs", true)) {
        Cheat.PrintChat(log_tab)
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
        var text = "DT [Revoltmod] | tickbase(v): 18";
        var color = [89, 119, 239, 255];
    } else if (CanShoot && Exploit.GetCharge() == 1 && UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
        var text = "DT [Revoltmod] | tickbase(v): 7";
        var color = [89, 119, 239, 255];
    } else {
        var text = "DT [Revoltmod] | tickbase(v): 0";
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
{   if(!World.GetServerString()) return;

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

function isActive(a)
{
    return UI.IsHotkeyActive("Script items", a)
}

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

function drawString()
{
	if(World.GetServerString() == "")
		return;
		

	arrows_color = UI.GetColor( "Misc", "JAVASCRIPT", "Script items", "Arrows color" );
	s_arrow_color = UI.GetColor( "Misc", "JAVASCRIPT", "Script items", "Selected arrow color" );
	
	isDoubletap = UI.IsHotkeyActive("Rage", "Exploits", "Doubletap");
	isInverted = UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter");
	isHideReal = UI.GetValue("Anti-Aim", "Fake angles", "Hide real angle");
	isHIDESHOTS = UI.IsHotkeyActive("Rage", "Exploits", "Hide shots");
	isDMG = isActive("Minimum damage override");
	isSP =  UI.IsHotkeyActive("Rage", "General", "Force safe point"); // UI.IsHotkeyActive("Rage", "General", "Force safe point")
	isOVHBX = false; //UI.IsHotkeyActive("Rage", "General config", "Hitbox override")
	isFD = UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck");
	arrows_type = UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Arrows" );

	dt_color = [255,0,0,255]
	
	var isOpposite = UI.GetValue("Anti-Aim", "Fake angles", "LBY mode") == "1";
	var isNormal = UI.GetValue("Anti-Aim", "Fake angles", "LBY mode") == "0";

	if (isOpposite)
	{
		Render.String(screen_size[0] /2 +5, screen_size[1] /2 +40, 0, "OPPOSITE", [ 177, 151, 255, 255 ],3 );
	}
	else if (isNormal)
	{
		Render.String(screen_size[0] /2 +5, screen_size[1] /2 +40, 0, "NORMAL", [ 177, 151, 255, 255 ],3 );
	}

	is_DT = false

	g_Local = Entity.GetLocalPlayer( );
	g_Local_weapon = Entity.GetWeapon(g_Local);
	weapon_name = Entity.GetName(g_Local_weapon);
	g_Local_classname = Entity.GetClassName( g_Local_weapon );

	if ( UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Safe AWP") && g_Local_classname == "CWeaponAWP" ) {
		is_force_safe_point = UI.IsHotkeyActive("Rage", "GENERAL", "General", "Force safe point");
		if( !is_force_safe_point ) {
			UI.ToggleHotkey("Rage", "GENERAL", "General", "Force safe point");
			prefer_safe_backup = true
		}
	} else if ( prefer_safe_backup ) {
		UI.ToggleHotkey("Rage", "GENERAL", "General", "Force safe point");
		prefer_safe_backup = false;
	}

	DT = "DT ";
	add_y = 58;

	if(UI.GetValue( "Rage", "GENERAL", "Exploits", "Doubletap" ))
    {
        if(isDoubletap)
        {
			dt_color = [255 * (1.0 - Exploit.GetCharge()), 255 * Exploit.GetCharge(), 0, 255]  
        }
        else
        {
			dt_color = [255, 0, 0, 255]
        }    
    }    
	
	if ((g_Local_classname == "CKnife" || g_Local_classname == "CWeaponSSG08" || g_Local_classname == "CWeaponAWP" || weapon_name == "r8 revolver" || g_Local_classname == "CHEGrenade" || g_Local_classname == "CMolotovGrenade" || g_Local_classname == "CIncendiaryGrenade" || g_Local_classname == "CFlashbang" || g_Local_classname == "CSmokeGrenade" || g_Local_classname == "CDecoyGrenade" || g_Local_classname == "CWeaponTaser" || g_Local_classname == "CC4")) 
	{
		if (isFD) {
			DT = DT + "(fakeduck)";
		} else {
			DT = DT;
		} 
		is_DT = false;
	} else 
	{
		DT = isFD ? "DT (fakeduck)" : "DT ";
		is_DT = isFD == false && isDoubletap;
	}

	if (arrows_type == 1) {
	Render.Polygon( [ [ screen_size[0] /2 -62, screen_size[1] /2 ], [ screen_size[0] /2 -45, screen_size[1] /2 -10 ], [ screen_size[0] /2 -45, screen_size[1] /2 + 10] ], drawLeft ? s_arrow_color : arrows_color ); // LEFT

	Render.Polygon( [ [ screen_size[0] /2 - 10, screen_size[1] /2 + 35 ], [ screen_size[0] /2 + 10, screen_size[1] /2 +35 ], [ screen_size[0] /2, screen_size[1] /2 + 52] ], drawBack ? s_arrow_color : arrows_color ); // BACK

	Render.Polygon( [ [ screen_size[0] /2 + 45, screen_size[1] /2 + 10], [ screen_size[0] /2 + 45, screen_size[1] /2 -10], [ screen_size[0] /2 + 62, screen_size[1] /2] ], drawRight ? s_arrow_color : arrows_color ); // RIGHT
	}

	if (arrows_type == 2)
	{
		Render.String(screen_size[0] /2 -50, screen_size[1] /2 -20, 1,  "<", drawLeft ? s_arrow_color : arrows_color, 4 );
		Render.String(screen_size[0] /2 +50, screen_size[1] /2 -20, 1,  ">", drawRight ? s_arrow_color : arrows_color, 4 );
		Render.String(screen_size[0] /2, screen_size[1] /2 +20, 1,  "v", drawBack ? s_arrow_color : arrows_color, 4 );		
	}

	if(drawLeft)
	{
		Render.String(screen_size[0] /2 +5, screen_size[1] /2 +49, 0, isInverted ? "LEFT" : "RIGHT", [ 209, 139, 230, 255 ],3 );
		Render.String(screen_size[0] /2 +5, screen_size[1] /2 +58, 0, is_DT ? DT : DT, dt_color,3 );
		if (isHIDESHOTS) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "ONSHOT", [ 124, 195, 13, 255 ],3 );
		}
		if (isDMG) {
			add_y = add_y + 9;
		    Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "DMG", [ 255, 255, 255, 255 ],3 );
		}
		if (isFD) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "DUCK", [ 255, 255, 255, 255 ] ,3 );
		}
		if (isSP) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "SP", [ 124, 195, 13, 255 ] ,3 );
		}
		if (isOVHBX) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "FB", [ 124, 195, 13, 255 ] ,3 );
		}
	}
	else if(drawRight)
	{	
		Render.String(screen_size[0] /2 +5, screen_size[1] /2 +49, 0, isInverted ? "LEFT" : "RIGHT", [ 209, 139, 230, 255 ],3 );
		Render.String(screen_size[0] /2 +5, screen_size[1] /2 +58, 0, is_DT ? DT : DT, dt_color,3 );
		if (isHIDESHOTS) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "ONSHOT", [ 124, 195, 13, 255 ],3 );
		}
		if (isDMG) {
			add_y = add_y + 9;
		    Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "DMG", [ 255, 255, 255, 255 ],3 );
		}
		if (isFD) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "DUCK", [ 255, 255, 255, 255 ],3 );
		}
		if (isSP) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "SP", [ 124, 195, 13, 255 ] ,3 );
		}
		if (isOVHBX) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "FB", [ 124, 195, 13, 255 ] ,3 );
		}
	}
	else if(drawBack)
	{
		Render.String(screen_size[0] /2 +5, screen_size[1] /2 +49, 0, isInverted ? "LEFT" : "RIGHT", [ 209, 139, 230, 255 ],3 );
		Render.String(screen_size[0] /2 +5, screen_size[1] /2 +58, 0, is_DT ? DT : DT, dt_color,3 );
		if (isHIDESHOTS) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "ONSHOT", [ 124, 195, 13, 255 ],3 );
		}
		if (isDMG) {
			add_y = add_y + 9;
		    Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "DMG", [ 255, 255, 255, 255 ],3 );
		}
		if (isFD) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "DUCK", [ 255, 255, 255, 255 ],3 );
		}
		if (isSP) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "SP", [ 124, 195, 13, 255 ] ,3 );
		}
		if (isOVHBX) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "FB", [ 124, 195, 13, 255 ] ,3 );
		}
	}
	else if(drawHideReal)
	{
		Render.String(screen_size[0] /2 +5, screen_size[1] /2 +49, 0, isHideReal ? "HIDE" : "HIDE", [ 209, 139, 230, 255 ],3 );
		Render.String(screen_size[0] /2 +5, screen_size[1] /2 +58, 0, is_DT ? DT : DT, dt_color,3 );
		if (isHIDESHOTS) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "ONSHOT", [ 124, 195, 13, 255 ],3 );
		}
		if (isDMG) {
			add_y = add_y + 9;
		    Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "DMG", [ 255, 255, 255, 255 ],3 );
		}
		if (isFD) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2+5 , screen_size[1] /2 + add_y, 0, "DUCK", [ 255, 255, 255, 255 ],3 );
		}
				if (isSP) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "SP", [ 124, 195, 13, 255 ] ,3 );
		}
		if (isOVHBX) {
			add_y = add_y + 9;
			Render.String(screen_size[0] /2 +5, screen_size[1] /2 + add_y, 0, "FB", [ 124, 195, 13, 255 ] ,3 );
		}
	}
}

function override_mindmg()
{
	if(!isActive("Minimum damage override"))
	{
		if (restore_values)
		{
			restore_values = false;
	        
			setValue("PISTOL", pistol_cache)
			setValue("HEAVY PISTOL", heavy_cache)
			setValue("SCOUT", scout_cache)
			setValue("AWP", awp_cache)
			setValue("AUTOSNIPER", auto_cache)
		}
		else
		{
			pistol_cache = UI.GetValue("Rage", "PISTOL", "Targeting", "Minimum damage")
 			heavy_cache = UI.GetValue("Rage", "HEAVY PISTOL", "Targeting", "Minimum damage")
 			scout_cache = UI.GetValue("Rage", "SCOUT", "Targeting", "Minimum damage")
 			awp_cache = UI.GetValue("Rage", "AWP", "Targeting", "Minimum damage")
 			auto_cache = UI.GetValue("Rage", "AUTOSNIPER", "Targeting", "Minimum damage")
		}

		return;
	}

	restore_values = true;
	
	pistol_value = UI.GetValue("Script items", "Pistol Mindmg")
	heavy_value = UI.GetValue("Script items", "Heavy Pistol Mindmg")
    scout_value = UI.GetValue("Script items", "Scout Mindmg")
    awp_value = UI.GetValue("Script items", "AWP Mindmg")
    auto_value = UI.GetValue("Script items", "Auto Mindmg")
    weapon_name = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))

    if (isPistol(weapon_name))
	{
		setValue("PISTOL", pistol_value)
	}

    if (isHeavyPistol(weapon_name))
    {
		setValue("HEAVY PISTOL", heavy_value)
    }
    
    if (weapon_name == "ssg 08")
    {
		setValue("SCOUT", scout_value)
    }

    if (weapon_name == "awp")
    {
		setValue("AWP", awp_value)
    }

    if (isAutoSniper(weapon_name))
    {    
		setValue("AUTOSNIPER", auto_value)
    }
}

function onCreateMove()
{
	override_mindmg();
	
	isLeftActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Left Hotkey" );
	isRightActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Right Hotkey" );
	isBackwardsActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Backwards Hotkey" );
	isForwardActive = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script items", "Forward Hotkey" );
	
	if(isLeftActive && leftWasPressed == false)
	{	
		lastPressed = Global.Tickcount();
		isHideRealActive = false;
		leftWasPressed = true;
		backWasPressed = false;
		rightWasPressed = false;
		upWasPressed = false;
		drawLeft = 1;
		drawBack = 0;
		drawRight = 0;
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", -90 );
		UI.SetValue( "Anti-Aim", "Fake angles", "Hide real angle", false);
	} else if( isLeftActive && leftWasPressed == true && Global.Tickcount() > lastPressed + 16 ) {
		isHideRealActive = true;
		oldTick = Global.Tickcount();
	}

	if(isRightActive && rightWasPressed == false)
	{	
		lastPressed = Global.Tickcount();
		isHideRealActive = false;
		backWasPressed = false;
		leftWasPressed = false;
		rightWasPressed = true;
		upWasPressed = false;
		drawLeft = 0;
		drawBack = 0;
		drawRight = 1;
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 90 );
		UI.SetValue( "Anti-Aim", "Fake angles", "Hide real angle", false);
		
	} else if(isRightActive && rightWasPressed == true && Global.Tickcount() > lastPressed + 16){
		isHideRealActive = true;
		oldTick = Global.Tickcount();
	}
	if(isBackwardsActive && backWasPressed == false && Global.Tickcount() > lastPressed + 16)
	{	
		lastPressed = Global.Tickcount();
		isHideRealActive = false;
		backWasPressed = true;
		rightWasPressed = false;
		leftWasPressed = false;
		upWasPressed = false;
		drawLeft = 0;
		drawBack = 1;
		drawRight = 0;
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0 );
		UI.SetValue( "Anti-Aim", "Fake angles", "Hide real angle", false);
	} else if(isBackwardsActive && backWasPressed == true && Global.Tickcount() > lastPressed + 16)  {
		isHideRealActive = true;
		oldTick = Global.Tickcount();
	}

	if (isForwardActive && upWasPressed == false && Global.Tickcount() > lastPressed + 16) {	
		lastPressed = Global.Tickcount();
		isHideRealActive = false;
		backWasPressed = false;
		rightWasPressed = false;
		leftWasPressed = false;
		upWasPressed = true;
		drawLeft = 0;
		drawBack = 0;
		drawRight = 0;
		UI.SetValue( "Anti-Aim", "Rage Anti-Aim", "Yaw offset", 180 );
		UI.SetValue( "Anti-Aim", "Fake angles", "Hide real angle", false);
	}

	if (isHideRealActive) {		
		if (Global.Tickcount() > oldTick + 16)  {
			backWasPressed = false;
			rightWasPressed = false;
			leftWasPressed = false;
			upWasPressed = false;
			oldTick = Global.Tickcount();
		}
		
		drawLeft = 0;
		drawBack = 0;
		drawRight = 0;
		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -6 );
		UI.SetValue("Anti-Aim", "Fake angles", "Hide real angle", true);
	}
}

function player_connect(){
    lastPressed = Global.Tickcount();
    oldTick = Global.Tickcount();
}

function watermark() {
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

function dt_recharger() {
	if (UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "DT Recharger", true)) {
		DT_Charge = Exploit.GetCharge()
		if (UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap")) {
			if (DT_Charge == 0) {
                UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap", false)
				Exploit.Exploit.Recharge()
			} else {
                UI.SetValue("Rage", "GENERAL", "Exploits", "Doubletap", true)
            }
		}
	}
}

function aspectration() {
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio", true) && UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Activate Revoltmod", true)) {
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio Value", true);
        ratio = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio Value").toString();
        UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Hidden cvars", true);
        switch (Global.FrameStage()) {
            case 5: {
                Global.ExecuteCommand( "r_aspectratio " + ratio );
                break;
            }
            default: break;
        } 
    } else {
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio Value", false)
    }
}

function enable_mod() {
    UI.AddCheckbox("Activate Revoltmod")
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
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Safe AWP", true );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio", true );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "DT Recharger", true); 
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Chat RageLogs", true)
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Arrows", true);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Arrows color", true );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Selected arrow color", true );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Left Hotkey", true );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Right Hotkey", true );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Backwards Hotkey", true );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Forward Hotkey", true );
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
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Safe AWP", false );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio", false );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Aspect Ratio Value", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "DT Recharger", false); 
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Chat RageLogs", false);
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Arrows", false );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Arrows color", false );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Selected arrow color", false );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Left Hotkey", false );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Right Hotkey", false );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Backwards Hotkey", false );
        UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Forward Hotkey", false );
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
    UI.AddCheckbox("Safe AWP");
    UI.AddCheckbox( "Aspect Ratio");
    UI.AddSliderFloat("Aspect Ratio Value", 0, 5);
    UI.AddCheckbox("DT Recharger"); 
    UI.AddCheckbox("Chat RageLogs")
    UI.AddDropdown("Arrows", [ "Off", "triangle", "arrows" ]);
    UI.AddColorPicker("Arrows color");
    UI.AddColorPicker("Selected arrow color");
    UI.AddHotkey("Left Hotkey");
    UI.AddHotkey("Right Hotkey");
    UI.AddHotkey("Backwards Hotkey");
    UI.AddHotkey("Forward Hotkey");
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

Cheat.RegisterCallback("Draw", "togler");
Cheat.RegisterCallback("FrameStageNotify", "aspectration");
Cheat.RegisterCallback("Draw", "main_dt");
Cheat.RegisterCallback("Draw", "keybinds");
Cheat.RegisterCallback("Draw", "watermark");
Cheat.RegisterCallback("Draw", "main_aa");
Cheat.RegisterCallback("ragebot_fire", "ragebotLogs");
Cheat.RegisterCallback("Draw", "drawString");
Cheat.RegisterCallback("CreateMove", "onCreateMove");
Cheat.RegisterCallback("player_connect_full", "player_connect");
Cheat.RegisterCallback("CreateMove", "dt_recharger");

